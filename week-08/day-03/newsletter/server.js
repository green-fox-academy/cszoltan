'use strict';

const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

let signups = [];

app.use(express.json());
app.use('/assets', express.static('assets'));

app.get('/signup', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.post('/signup', (req, res) => {
  let myObj = {username: req.body.username, email: req.body.email};
  signups.push(myObj);
  let messageString = `Thanks ${myObj.username}, we will send updates to ${myObj.email}!`;
  res.json({
    message: messageString,
  });
});

app.get('/list', (req, res) => {
  res.json( {
    signups
  })
});

app.listen(PORT, () => {
  console.log('Server up');
});
