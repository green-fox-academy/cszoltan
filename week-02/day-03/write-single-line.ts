// Open a file called 'my-file.txt'
// Write your name in it as a single line
// If the program is unable to write the file,
// then it should print an error message like: 'Unable to write file: my-file.txt'

'use strict';
export {};

declare function require(path: string): any;
let fs = require('fs');
let charEncoding: string = 'utf8';

try {
  fs.writeFileSync('my-file.txt', 'Csikos Zoltan');
}
catch (e) {
  console.log('Unable to write file: my-file.txt');
}