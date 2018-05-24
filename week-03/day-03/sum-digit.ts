'use strict';
export {};

function sumDigit (n: number): number {
  
  if (n / 10 < 1) {
    return n % 10;
  } else {
    return n % 10 + sumDigit(Math.floor(n / 10));
  }
}

console.log(sumDigit(123));
