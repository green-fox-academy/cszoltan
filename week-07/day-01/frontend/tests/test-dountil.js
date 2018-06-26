'use strict';

const test = require('tape');
const request = require('supertest');
const app = require('../routes');

test('dountil/sum endpoint', (t) => {
  request(app)
    .post('/dountil/sum')
    .send({until: 5})
    .expect('Content-Type', /json/)
    .expect(200, {result: 15})
    .end((err, res) => {
      t.error(err);
      t.end();
    });
});

test('dountil/factor endpoint', (t) => {
  request(app)
    .post('/dountil/factor')
    .send({until: 4})
    .expect('Content-Type', /json/)
    .expect(200, {result: 24})
    .end((err, res) => {
      t.error(err);
      t.end();
    });
});
