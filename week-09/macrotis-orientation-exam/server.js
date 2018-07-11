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

app.post('/add', (req, res) => {
  let queryInputs = [req.body.name, req.body.city, req.body.price, req.body.lattitude, req.body.longitude, req.body.category, req.body.recommendedAge, req.body.duration];
  let isDefined = true;
  queryInputs.forEach(element => {
    if (element === undefined) {
      isDefined = false;
    }
  });
  if (isDefined) {
    if (req.body.id !== undefined) {
      let sql = `UPDATE attractions SET attr_name = ?, city = ?, price = ?, lattitude = ?, longitude = ?, category = ?, recommended_age = ?, duration = ? WHERE id = '${req.body.id}';`;
      conn.query(sql, queryInputs, (err, data) => {
        if (err) {
          console.log(err);
          res.sendStatus(500);
          return;
        }
        res.json({
          status: 'ok',
          id: req.body.id,
        });
      });
    } else {
      let sql = 'INSERT INTO attractions (attr_name, city, price, lattitude, longitude, category, recommended_age, duration) VALUES(?, ?, ?, ?, ?, ?, ?, ?);';
      conn.query(sql, queryInputs, (err, data) => {
        if (err) {
          console.log(err);
          res.sendStatus(500);
          return;
        }
        conn.query('SELECT id FROM attractions ORDER BY id DESC LIMIT 1;', (err, data) => {
          if (err) {
            console.log(err);
            res.sendStatus(500);
            return;
          }
          res.json({
            status: 'ok',
            id: data[0].id,
          });
        });
      });
    }
  } else {
    res.sendStatus(500);
  }
});

app.get('/attractions', (req, res) => {
  if (Object.keys(req.query).length === 0) {
    let sql = 'SELECT * FROM attractions;';
    conn.query(sql, (err, data) => {
      if (err) {
        console.log(err);
        res.sendStatus(500);
        return;
      }
      res.json({
        data,
      });
    });
  } else {
    let queryInputs = [];
    let sql = 'SELECT * FROM attractions WHERE ';
    Object.keys(req.query).forEach(key => {
      queryInputs.push(req.query[key]);
      sql += `${key} = ? AND `;
    });
    sql = sql.slice(0, sql.length - 5);
    sql += ';';
    conn.query(sql, queryInputs, (err, data) => {
      if (err) {
        console.log(err);
        res.sendStatus(500);
        return;
      }
      res.json({
        data,
      });
    });
  }
});

app.listen(PORT, () => {
  console.log('k');
});
