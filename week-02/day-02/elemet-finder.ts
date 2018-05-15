'use strict';

function containsSeven(input: number[]): string{
  let doesIt: boolean = false;
  input.forEach(function (value) {
    if (value === 7) {
      doesIt = true;
    }
  });
  if (doesIt) {
    return 'Hoorray';
  } else {return 'Noooooo';}
}

// Write a function that checks if the array contains "7"
// if it contains return "Hoorray" otherwise return "Noooooo"

const numbers: number[] = [1, 2, 3, 4, 5, 6, 8];
console.log(containsSeven(numbers));

// The output should be: "Noooooo"
// Do this again with a different solution using different list functions!

export = containsSeven;