'use strict';

declare function require(path: string): any;
let fs = require('fs');
let charEncoding: string = 'utf8';

function countBirthPerYear(years: string[]): Object {
  let output: Object = {};
  years.forEach(value => {
    if (output[value]) {
      output[value]++;
    } else {
      output[value] = 1;
    }
  });
  return output;
}

function busyYear(file: string): string {
  let data: string[] = fs.readFileSync(file, charEncoding).split('\r\n').map(value => {
    return value.slice(value.indexOf(';') + 1, value.indexOf(';') + 5);
  });
  let yearCounts: Object = countBirthPerYear(data);
  let max: number = 0;
  let output: string = '';
  let properties = Object.getOwnPropertyNames(yearCounts);
  properties.forEach(value => {
    if (yearCounts[value] > max) {
      max = yearCounts[value];
      output = value;
    }
  });
  return output;
}

console.log(busyYear('data.csv'));
