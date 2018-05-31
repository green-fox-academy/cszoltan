'use strict';
import {test} from 'tape';

class Sum {
  list: number[];

  constructor(numbers: number[]) {
    this.list = numbers;
  }

  sum(): number {
    let output: number = 0;
    this.list.forEach(value => {
      output += value;
    });
    return output;
  }
}

test('test on 2 numbers', t => {
  let example: Sum = new Sum([1, 2]);
  t.equal(example.sum(), 3);
  t.end();
});

test('test on no numbers', t => {
  let example: Sum = new Sum([]);
  t.equal(example.sum(), 0);
  t.end();
});

test('test on 1 numbers', t => {
  let example: Sum = new Sum([3]);
  t.equal(example.sum(), 3);
  t.end();
});

test('test on null', t => {
  let example: Sum = new Sum([null]);
  t.equal(example.sum(), 0);
  t.end();
});
