// Write a function that takes a filename as string,
// then returns the number of lines the file contains.
// It should return zero if it can't open the file, and
// should not raise any error.

'use strict';
export {};

declare function require(path: string): any;
let fs = require('fs');
let charEncoding: string = 'utf8';

function countLines(input: string): number {
  try {
    let file = fs.readFileSync(input, 'utf8');
    let count: number = 0;
    for (let i: number = 0; i < file.length; i++) {
      if (file[i] === '\n') {
        count++;
      }
    }
    return ++count;
  }
  catch (e) {
    return 0;
  }
}
console.log(countLines('my-file.txt'));
