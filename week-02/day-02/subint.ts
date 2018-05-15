'use strict';
export {};

//  Create a function that takes a number and a list of numbers as a parameter
//  Returns the indeces of the numbers in the list where the first number is part of
//  Returns an empty list if the number is not part any of the numbers in the list
// Example

function subint (sub: number, int: number[]): number[] {
  let out: number[] = [];
  let str: string = '';
  for (let i: number =0; i < int.length; i++) {
    str = `${int[i]}`;
    if (str.indexOf(`${sub}`) >= 0) {
      out.push(i);
    }
  }
  return out;
}

console.log(subint(1, [1, 11, 34, 52, 61]));
// should print: `[0, 1, 4]`
console.log(subint(9, [1, 11, 34, 52, 61]));
// should print: '[]'