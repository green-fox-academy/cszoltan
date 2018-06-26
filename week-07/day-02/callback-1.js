'use strict';

const mapWith = (array, callback) => {
  let output = [];
  array.forEach(value => {
    output.push(callback(value));
  });
  // The mapWith() function should iterate over the given array and call the callback function on every element.
  // It stores the callback return values in the output.
  // The mapWith() should return with the output array.

  return output;
}

const addOne = (number) => {
  return number + 1;
}

// Exercise 1:

console.log(mapWith([1, 2, 3], addOne));
//expected result: [2, 3, 4]

// Exercise 2:

const removeSecondLetter = (string) => {
  let temp = string.split('');
  let output = '';
  for (let i = 0; i< temp.length; i += 2) {
    output += `${temp[i]}`;
  }
  return output;
}

// Create a callback function which remove every second letter from a string

const words = ['map', 'reduce', 'filter'];

console.log(mapWith(words, removeSecondLetter));
// expected result: ['mp','rdc', 'fle']
