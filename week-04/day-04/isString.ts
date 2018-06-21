'use strict';
import { test } from 'tape';

function isString(input: any): boolean {
  try {
    input.slice(0, input.length);
    return true;
  }
  catch (e) {
    return false;
  }
}

/*test('is boolean a string?', t => {
  t.equal(isString(true), false);
  t.end();
});

test('is string a string?', t => {
  t.equal(isString('true'), true);
  t.end();
});*/

if (typeof 'asd' === 'string') {
  console.log('asd');
}
