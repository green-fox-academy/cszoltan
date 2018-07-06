'use strict';

require('dotenv').config();
const express = require('express');
const mysql = require('mysql');
const path = require('path');
const app = express();
const PORT = 3000;

const conn = mysql.createConnection({
  //socketPath: '/tmp/mysql.sock', // <-- it's balazskaxd's line
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
});

app.use(express.json());
app.use('/assets', express.static('assets'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/hello', (req, res) => {
  res.json({
    message: 'hello world',
  });
});

app.get('/api/posts', (req, res) => {
  conn.query('SELECT * FROM post;', (err, post) => {
    if (err) {
      res.sendStatus(500);
      return;
    }
    res.json({
      post,
    });
  });
});

app.post('/api/posts', (req, res) => {
  conn.query(`INSERT INTO post (title, timestamp, content) VALUES('${req.body.title}', UNIX_TIMESTAMP(), '${req.body.content}');`, (err, data) => {
    if (err) {
      console.log(err);
      res.sendStatus(500);
      return;
    }
    res.json({
      message: "k",
    });
  });
});

app.put('/api/posts/:id/upvote', (req, res) => {
  conn.query(`UPDATE post SET score = score + 1 WHERE id = ${req.params.id};`, (err, data) => {
    if (err) {
      console.log(err);
      res.sendStatus(500);
      return;
    }
    conn.query(`SELECT id, score FROM post WHERE id = ${req.params.id};`, (err, data) => {
      if (err) {
        console.log(err);
        res.sendStatus(500);
        return;
      }
      res.json({
        id: data[0].id,
        score: data[0].score,
      });
    });
  });
});

app.put('/api/posts/:id/downvote', (req, res) => {
  conn.query(`UPDATE post SET score = score - 1 WHERE id = ${req.params.id};`, (err, data) => {
    if (err) {
      console.log(err);
      res.sendStatus(500);
      return;
    }
    conn.query(`SELECT id, score FROM post WHERE id = ${req.params.id};`, (err, data) => {
      if (err) {
        console.log(err);
        res.sendStatus(500);
        return;
      }
      res.json({
        id: data[0].id,
        score: data[0].score,
      });
    });
  });
});

app.delete('/api/posts/:id', (req, res) => {
  conn.query(`DELETE FROM post WHERE id = ${req.params.id};`, (err, data) => {
    if (err) {
      console.log(err);
      res.sendStatus(500);
      return;
    }
    res.json({
      message: 'k',
    });
  });
});

app.put('/api/posts/:id', (req, res) => {
  conn.query(`UPDATE post SET title = '${req.body.title}', content = '${req.body.content}', timestamp = UNIX_TIMESTAMP() WHERE id = ${req.params.id};`, (err, data) => {
    if (err) {
      console.log(err);
      res.sendStatus(500);
      return;
    }
    res.json({
      message: 'k',
    });
  });
});

app.listen(PORT, () => {
  console.log('Server up');
});
