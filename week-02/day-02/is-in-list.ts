'use strict';

// Check if array contains all of the following elements: 4,8,12,16
// Create a function that accepts 'listOfNumbers' as an input
// it should return "true" if it contains all, otherwise "false"

function checkNums(input: number[]): boolean {
  let is4: boolean = false;
  let is8: boolean = false;
  let is12: boolean = false;
  let is16: boolean = false;
  input.forEach(function (value) {
    if (value === 4) {
      is4 = true;
    } else if (value === 8) {
      is8 = true;
    } else if (value === 12) {
      is12 = true;
    } else if (value === 16) {
      is16 = true;
    }
  });
  return is4 && is8 && is12 && is16;
}

let listOfNumbers: number[] = [2, 4, 6, 8, 10, 12, 14, 16];
console.log(checkNums(listOfNumbers));

export = checkNums;