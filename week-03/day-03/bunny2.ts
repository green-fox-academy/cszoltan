'use strict';
export {};

function bunnyEars (n: number): number {
  if (n === 1) {
    return 2;
  } else if (n % 2 === 0) {
    return 3 + bunnyEars(n - 1);
  } else {
    return 2 + bunnyEars(n - 1);
  }
}

console.log(bunnyEars(5));
