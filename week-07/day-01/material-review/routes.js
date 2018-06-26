'use strict';

const express = require('express');
const app = express();

const cars = [
  {id: 1, brand: 'idk', type: 'wat'},
  {id: 2, brand: 'idk2', type: 'wat2'},
  {id: 3, brand: 'idk3', type: 'wat3'}
];

app.use(express.json());

app.get('/ping', (req, res) => {
  res.json({
    message: 'pong',
  });
});

app.get('/api/cars', (req, res) => {
  res.json({
    cars: cars,
  });
});

app.post('/api/cars', (req, res) => {
  cars.push({
    id: cars.length + 1,
    brand: req.body.brand,
    type: req.body.type
  });
  res.json({
    message: 'fuck off',
  });
});

app.get('/idk', (req, res) => {
  res.json({
    message: "new useless shit",
  });
});

app.delete('/api/cars', (req, res) => {
  cars.pop();
  res.json({
    message: 'deleted the last car',
  });
});

module.exports = app;