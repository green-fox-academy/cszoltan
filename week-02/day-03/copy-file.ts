// Write a function that copies a file to an other
// It should take the filenames as parameters
// It should return a boolean that shows if the copy was successful

'use strict';
export {};

declare function require(path: string): any;
let fs = require('fs');
let charEncoding: string = 'utf8';

function copyFile(inFile: string, outFile: string): boolean {
  try {
    fs.writeFileSync(outFile, fs.readFileSync(inFile, charEncoding));
    return true;
  }
  catch (e) {
    return false;
  }
}

copyFile('my-file.txt', 'my-file2.txt');
