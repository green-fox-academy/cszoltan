'use strict';
export {};

//  Create a function that takes a string and a list of string as a parameter
//  Returns the index of the string in the list where the first string is part of
//  Only need to find the first occurence and return the index of that
//  Returns `-1` if the string is not part any of the strings in the list
//  Example

function substrlist (sub: string, str: string[]): number{
  let out: number = -1;
  for (let i: number = 0; i < str.length; i++) {
    if (str[i].indexOf(sub) >= 0) {
      out = i;
      break;
    }
  }
  return out;
}

console.log(substrlist('ching', ['this', 'is', 'what', 'I\'m', 'searching', 'in']));
//  should print: `4`
console.log(substrlist('not', ['this', 'is', 'what', 'I\'m', 'searching', 'in']));
//  should print: `-1`