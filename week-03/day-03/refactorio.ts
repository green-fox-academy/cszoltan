'use strict';
export {};

function fact (n: number): number {
  
  if (n === 1) {
    return 1;
  } else {
    return n * fact(n-1);
  }
}

console.log(fact(5));
