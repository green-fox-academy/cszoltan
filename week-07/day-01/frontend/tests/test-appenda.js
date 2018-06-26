'use strict';

const test = require('tape');
const request = require('supertest');
const app = require('../routes');

test('appenda/:appendable endpoint', (t) => {
  request(app)
    .get('/appenda/kuty')
    .expect('Content-Type', /json/)
    .expect(200, {appended: 'kutya'})
    .end((err, res) => {
      t.error(err);
      t.end();
    });
});
