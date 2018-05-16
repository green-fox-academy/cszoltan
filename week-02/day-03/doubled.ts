// Create a method that decrypts duplicated-chars.txt

'use strict';
export {};

declare function require(path: string): any;
let fs = require('fs');
let charEncoding: string = 'utf8';

function deCypher (input: string): string {
  let out: string = '';
  for (let i: number = 0; i < input.length; i ++) {
    if (i % 2 === 0 || input[i] === '\n') {
      out += input[i];
    }
  }
  return out;
}

let myFile: string = 'duplicated-chars.txt';
fs.writeFileSync(myFile, deCypher(fs.readFileSync(myFile, charEncoding)));