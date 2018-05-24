'use strict';
export {};

function power (n: number, p: number): number {
  if (p === 1) {
    return n;
  } else {
    return n * power(n, p - 1);
  }
}

console.log(power(2, 10));
