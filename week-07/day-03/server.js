'use strict';

require('dotenv').config();
const express = require('express');
const app = express();
const mysql = require('mysql');
const PORT = 3000;

let conn = mysql.createConnection ({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PW,
  database: process.env.DB_DB,
});

app.use(express.json());
/*
app.use('/assets', express.static('assets'));
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});*/

app.get('/title',  (req, res) => {
  let sql = 'SELECT book_name from book_mast;';
  let queryInputs = [];
  if (req.query.country) {
    sql = 'SELECT * from author WHERE country = ?;';
    queryInputs = [req.query.country];
  }
  conn.query(sql, queryInputs, (err, rows) => {
    if (err) {
      console.log(err);
      res.status(500).send();
      return;
    }
    res.json({
      books: rows,
    });
  });
});

app.listen(PORT, () => {
  console.log('Server up');
});
