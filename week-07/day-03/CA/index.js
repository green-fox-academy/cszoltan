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

app.set('view engine', 'ejs');
app.use('/assets', express.static('assets'));

app.get('/', (req, res) => {
  conn.query('SELECT book_name FROM book_mast;', (err, books) => {
    if (err) {
      console.log(err);
      res.status(500).send();
      return;
    }
    res.render('home', {
      books,
    });
  });
});

app.get('/authors', (req, res) => {
  res.sendFile(path.join(__dirname, 'authors.html'));
});

app.get('/api/authors/full', (req, res) => {
let sql = 'SELECT * FROM author;';
let queryInputs = [];
if (req.query.country) {
  sql = 'SELECT * FROM author WHERE country = ?;';
  queryInputs = [req.query.country];
}
  conn.query(sql, queryInputs, (err, author) => {
    if (err) {
      console.log(err);
      res.status(500).send();
      return;
    }
    res.json({
      author,
    });
  });
});

app.get('/api/authors/countries', (req, res) => {
  conn.query('SELECT DISTINCT country FROM author;', (err, author) => {
    if (err) {
      console.log(err);
      res.status(500).send();
      return;
    }
    res.json({
      author,
    });
  });
});

app.get('/api/authors/cities', (req, res) => {
  conn.query('SELECT DISTINCT home_city FROM author;', (err, author) => {
    if (err) {
      console.log(err);
      res.status(500).send();
      return;
    }
    res.json({
      author,
    });
  });
});


app.get('/books', (req, res) => {
  res.sendFile(path.join(__dirname, 'books.html'));
});

app.get('/api/books/titles', (req, res) => {
  conn.query('SELECT book_name FROM book_mast;', (err, books) => {
    if (err) {
      console.log(err);
      res.status(500).send();
      return;
    }
    res.json({
      books,
    });
  });
});

app.get('/api/books/categories', (req, res) => {
  conn.query('SELECT cate_descrip FROM category;', (err, books) => {
    if (err) {
      console.log(err);
      res.status(500).send();
      return;
    }
    res.json({
      books,
    });
  });
});

app.get('/api/books/full', (req, res) => {
  let sql = 'SELECT book_name, aut_name, cate_descrip, pub_name, book_price FROM author, book_mast, category, publisher WHERE author.aut_id = book_mast.aut_id AND category.cate_id = book_mast.cate_id AND publisher.pub_id = book_mast.pub_id;';
  let queryInputs = [];

  if (req.query.category) {
    sql = 'SELECT book_name, aut_name, cate_descrip, pub_name, book_price FROM author, book_mast, category, publisher WHERE category.cate_descrip = ? AND author.aut_id = book_mast.aut_id AND category.cate_id = book_mast.cate_id AND publisher.pub_id = book_mast.pub_id;';
    queryInputs = [req.query.category];
  }

  conn.query(sql, queryInputs, (err, books) => {
    if (err) {
      console.log(err);
      res.status(500).send();
      return;
    }
    res.json({
      books,
    });
  });
});

app.listen(PORT, () => {
  console.log('Yay.');
});
