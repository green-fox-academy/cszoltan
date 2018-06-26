'use strict';

const test = require('tape');
const request = require('supertest');
const app = require('../routes');

test('ping endpoint', (t) => {
  request(app)
    .get('/ping')
    .expect('Content-Type', /json/)
    .expect(200, {message: 'pong'})
    .end((err, res) => {
      t.error(err);
      t.end();
    });
});
