'use strict';

const express = require('express');
const app = express();

app.use(express.json());
app.use('/assets', express.static('assets'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.get('/doubling', (req, res) => {
  if (req.query.input) {
    res.json({
      received: parseInt(req.query.input),
      result: parseInt(req.query.input) * 2,
    });
  } else {
    res.json({
      error: "Please provide an input!",
    });
  }
});

app.get('/greeter', (req, res) => {
  if (req.query.name && req.query.title) {
    res.json({
      welcome_message: `Oh, hi there ${req.query.name}, my dear ${req.query.title}!`,
    });
  } else if (req.query.name) {
    res.json({
      error: `Please provide a title!`,
    });
  } else {
    res.json({
      error: `Please provide a name!`,
    });
  }
});

app.get('/appenda/:appendable', (req, res) => {
  res.json({
    appended: req.params.appendable + 'a',
  });
});

app.post('/dountil/:what', (req, res) => {
  if (req.body.until) {
    if (req.params.what === 'sum') {
      let output = 1;
      for (let i = 2; i <= parseInt(req.body.until); i++) {
        output += i;
      }
      res.json({
        result: output,
      });
    } else {
      let output = 1;
      for (let i = 2; i <= parseInt(req.body.until); i++) {
        output *= i;
      }
      res.json({
        result: output,
      });
    }
  } else {
    res.json({
      error: 'Please provide a number!',
    })
  }
});

module.exports = app;
