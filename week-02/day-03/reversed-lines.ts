// Create a method that decrypts reversed-lines.txt

'use strict';
export {};



declare function require(path: string): any;
let fs = require('fs');

let charEncoding: string = 'utf8';

function deCypher (input: string): string {
  let out: string = '';
  let temp: string[] = input.split('\n');
  for (let i: number = 0; i < temp.length; i++) {
    for (let j: number = temp[i].length-1; j >= 0; j--) {
      out += temp[i][j];
    }
    out += '\r\n';
  }
  return out;
}

let myFile: string = 'reversed-lines.txt';

fs.writeFileSync(myFile, deCypher(fs.readFileSync(myFile, charEncoding)));
