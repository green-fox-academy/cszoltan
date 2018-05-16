// Read all data from 'log.txt'.
// Each line represents a log message from a web server
// Write a function that returns an array with the unique IP adresses.
// Write a function that returns the GET / POST request ratio.

'use strict';
export {};

declare function require(path: string): any;
let fs = require('fs');
let charEncoding: string = 'utf8';

function onlyUnique(value, index, self) { 
  return self.indexOf(value) === index;
}

function ipAddresses(input: string): string[]{
  let myFile = fs.readFileSync(input, charEncoding);
  let temp: string[] = myFile.split('\n');
  let out: string[] = []

  temp = temp.map(value => {
    return value.slice(27, 38);
  });

  out = temp.filter(onlyUnique);

  return out;
}

function getPost(input: string): number {
  let myFile = fs.readFileSync(input, charEncoding);
  let temp: string[] = myFile.split('\n');
  let sumGet: number = 0;

  temp.forEach(value => {
    if (value.indexOf('GET') >= 0){
      sumGet ++;
    }
  });
  return sumGet / temp.length;
}

console.log(ipAddresses('log.txt'));
let getPerc: number = getPost('log.txt')*100;
let postPerc: number = 100 - getPerc;

console.log(`GET ratio: ${getPerc}, POST ratio: ${postPerc}.`);