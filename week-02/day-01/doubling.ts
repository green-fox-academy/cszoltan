// -  Create a variable named `baseNum` and assign the value `123` to it
// -  Create a function called `doubling` that doubles it's input parameter and returns with an integer
// -  Log the result of `doubling(baseNum)` to the console
'use strict';
export {};


function doubling(input: number): number {
    return input * 2; 
}

let baseNum: number = 123;

console.log(doubling(baseNum));
