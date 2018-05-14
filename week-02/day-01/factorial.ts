// -  Create a function called `factorio`
//    that returns it's input's factorial

'use strict';
export {};

function factorio (input: number): number {
    let temp: number = 1;
    for (let i = 2; i <= input; i++) {
        temp *= i;
    }
    return temp;
}

let baseNum: number = 5;

console.log(factorio(baseNum));
