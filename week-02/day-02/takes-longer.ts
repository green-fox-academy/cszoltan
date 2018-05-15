'use strict';
export {};

// When saving this quote a disk error has occured. Please fix it.
// Add "always takes longer than" to between the words "It" and "you"

let quote: string = 'Hofstadter\'s Law: It you expect, even when you take into account Hofstadter\'s Law.'

let indexOfIt: number = quote.indexOf("It") + 2;
//let indexOfYou: number = quote.indexOf("you");

quote = quote.slice(0, indexOfIt) + " always takes longer than" + quote.slice(indexOfIt);
//console.log(indexOfIt);
console.log(quote);