'use strict';
import { test } from 'tape';

function countLetters(input: string): Object {
  let output = {};
  for (let i: number = 0; i < input.length; i++) {
    if (output[input[i]]) {
      output[input[i]]++;
    } else {
      output[input[i]] = 1;
    }
  }
  return output;
}

function anagram(stringA: string, stringB: string): boolean {
  let aObj = countLetters(stringA);
  let bObj = countLetters(stringB)
  let aProps = Object.getOwnPropertyNames(aObj);
  let bProps = Object.getOwnPropertyNames(bObj);
  if (aProps.length != bProps.length) {
    return false;
  }
  for (let i = 0; i < aProps.length; i++) {
    if (bProps.indexOf(aProps[i]) > -1) {
      if(aObj[aProps[i]]!==bObj[bProps[bProps.indexOf(aProps[i])]]) {
        return false;
      }
    } else {
      return false;
    }
  }
  return true;
}

test('testing count letters on 1', t => {
  t.deepEqual(countLetters('a'), { a: 1 });
  t.end();
});

test('testing count letters on 3', t => {
  t.deepEqual(countLetters('acc'), { a: 1, c: 2 });
  t.end();
});

test('testing anagram on 1 letter string', t => {
  t.equal(anagram('a', 'a'), true);
  t.end();
});

test('testing anagram on 2 letter string', t => {
  t.equal(anagram('ab', 'ba'), true);
  t.end();
});

test('testing anagram on a long string', t => {
  t.equal(anagram('anagram', 'nagaram'), true);
  t.end();
});
