'use strict';
export {};

function counter (n: number): number {
  console.log(n);
  if (n === 1) {
    return 1;
  } else {
    return counter(n-1);
  }
}

counter(6);