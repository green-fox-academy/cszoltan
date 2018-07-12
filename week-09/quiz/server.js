'use strict';

require('dotenv').config();
const express = require('express');
const mysql = require('mysql');
const path = require('path');
const app = express();
const PORT = 3000;

const conn = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE
});

app.use(express.json());
app.use('/static', express.static('static'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views/index.html'));
});

app.get('/manage', (req, res) => {
  res.sendFile(path.join(__dirname, 'views/manage.html'));
});

app.get('/game', (req, res) => {
  let sql = 'SELECT * from questions ORDER BY RAND() LIMIT 1;';
  conn.query(sql, (err, questions) => {
    if (err) {
      console.log(err);
      res.sendStatus(500);
      return;
    }
    let queryInput = questions[0].id;
    conn.query('SELECT * FROM answers WHERE question_id = ?;', queryInput, (err, answers) => {
      if (err) {
        console.log(err);
        res.sendStatus(500);
        return;
      }
      res.json({
        id: questions[0].id,
        question: questions[0].question,
        answers,
      });
    });
  });
});

app.get('/questions', (req, res) => {
  conn.query('SELECT * FROM questions;', (err, questions) => {
    if (err) {
      console.log(err);
      res.sendStatus(500);
      return;
    }
    res.json({
      questions,
    });
  });
});

app.post('/questions', (req, res) => {
  let sqlQ = 'INSERT INTO questions (question) VALUES (?);';
  let queryInputQ = [req.body.question];
  conn.query(sqlQ, queryInputQ, (err, question) => {
    if (err) {
      console.log(err);
      res.sendStatus(500);
      return;
    }
    req.body.answers.forEach(answer => {
      let sqlA = 'INSERT INTO answers (question_id, answer, is_correct) VALUES (?, ?, ?);';
      let queryInputA = [question.insertId, answer.value, answer.is_correct];
      conn.query(sqlA, queryInputA, (err, data) => {
        if (err) {
          console.log(err);
          res.sendStatus(500);
          return;
        }
      });
    });
    res.json({
      status: 'ok',
    });
  });
});

app.delete('/questions/:id', (req, res) => {
  console.log(req.params.id);
  let sql = `DELETE FROM questions WHERE id = ${req.params.id};`;
  //let queryInput = [req.params.id];
  conn.query(sql, (err, data) => {
    if (err) {
      console.log(err);
      res.sendStatus(500);
      return;
    }
  });
  sql = `DELETE FROM answers WHERE question_id = ${req.params.id};`;
  conn.query(sql, (err, data) => {
    if (err) {
      console.log(err);
      res.sendStatus(500);
      return;
    }
    res.json({
      status: 'ok',
    });
  });
});



app.listen(PORT, () => {
  console.log('Server up');
});