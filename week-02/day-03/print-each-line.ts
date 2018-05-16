'use strict';
export {};

declare function require(path: string): any;
let fs = require('fs');
let charEncoding: string = 'utf8';

try {
  /*if (!fs.existsSync('my-file.txt')) {
      throw new Error('Unable to read file: my-file.txt');
  }   */ 
  let myFile = fs.readFileSync('my-file.txt', charEncoding);
  console.log(myFile);
}
catch (e) {
  //console.log(e.message);
  console.log('Unable to read file: my-file.txt');
}
