// Create a function that takes 3 parameters: a path, a word and a number,
// than it should write to a file.
// The path parameter should be a string, that describes the location of the file.
// The word parameter should be a string, that will be written to the file as lines
// The number paramter should describe how many lines the file should have.
// So if the word is 'apple' and the number is 5, than it should write 5 lines
// to the file and each line should be 'apple'
// The function should not raise any error if it could not write the file.

'use strict';
export {};

declare function require(path: string): any;
let fs = require('fs');
let charEncoding: string = 'utf8';

function writingLines(path: string, word: string, num: number) {
  let out: string = '';
  for (let i: number = 0; i < num; i++) {
    out += `${word}\r\n`;
  }
  out = out.slice(0, out.length-2);
  fs.writeFileSync(path, out);
}

writingLines('my-file.txt', 'apple', 5);
