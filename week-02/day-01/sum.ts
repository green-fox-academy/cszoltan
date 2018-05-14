// -  Write a function called `sum` that sum all the numbers until the given parameter
// -  The function should return the result

'use strict';
export {};

function sum(input: number): number {
    let temp: number = 0;
    for (let i = 1; i <= input; i++) {
        temp += i;
    }
    return temp;
}

let baseNum: number = 4;

console.log(sum(baseNum));