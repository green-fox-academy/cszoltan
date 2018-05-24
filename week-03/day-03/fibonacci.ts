'use strict';
export {};

function fib (n: number): number {
  if (n === 1) {
    return 1;
  } if (n === 0 ) {
    return 0;
  } else {
    return fib(n-1) + fib(n-2);
  }
}

console.log(fib(7));
