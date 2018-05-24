'use strict';
export {};

function bunnyEars (n: number): number {
  if (n === 1) {
    return 2;
  } else {
    return 2 + bunnyEars(n-1);
  }
}

console.log(bunnyEars(3));
