'use strict';

const test = require('tape');
const request = require('supertest');
const app = require('../routes');

test('greeter?name endpoint', (t) => {
  request(app)
    .get('/greeter?name=Jason')
    .expect('Content-Type', /json/)
    .expect(200, {error: "Please provide a title!"})
    .end((err, res) => {
      t.error(err);
      t.end();
    });
});

test('doubling?name&title endpoint', (t) => {
  request(app)
    .get('/greeter?name=Jason&title=idc')
    .expect('Content-Type', /json/)
    .expect(200, {welcome_message: `Oh, hi there Jason, my dear idc!`})
    .end((err, res) => {
      t.error(err);
      t.end();
    });
});
