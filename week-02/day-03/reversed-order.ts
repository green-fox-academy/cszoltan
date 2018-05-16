// Create a method that decrypts reversed-order.txt

'use strict';
export {};



declare function require(path: string): any;
let fs = require('fs');

let charEncoding: string = 'utf8';

function deCypher (input: string): string {
  let out: string = '';
  let temp: string[] = input.split('\n');
  for (let i: number = temp.length-1; i >= 0; i--) {
    out += `${temp[i]}\r\n`;
  }
  return out;
}

let myFile: string = 'reversed-order.txt';

fs.writeFileSync(myFile, deCypher(fs.readFileSync(myFile, charEncoding)));
