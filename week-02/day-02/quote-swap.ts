'use strict';

function quoteSwap(input: string[]): string {
  let temp: string = input[2];
  let out: string = '';
  input[2] = input[5];
  input[5] = temp;
  input.forEach(function (value) {
     out += value + ' ';
  });
  return out;
}

// Accidentally I messed up this quote from Richard Feynman.
// Two words are out of place
// Your task is to fix it by swapping the right words with code
// Also, log the sentence to the console with spaces in between.
// Create a function called quoteSwap().

let words: string[] = ['What', 'I', 'do', 'create,', 'I', 'cannot', 'not', 'understand.'];
console.log(quoteSwap(words));

// Expected output: "What I cannot create I do not understand."

export = quoteSwap;