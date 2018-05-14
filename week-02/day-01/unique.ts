//  Create a function that takes a list of numbers as a parameter
//  Returns a list of numbers where every number in the list occurs only once

'use strict';
export {};

function unique(arr: number[]): number[] {
    let u: boolean;
    let tmp: number[] = [];
    for (let i = 0; i < arr.length; i++) {
        u = true;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] === arr[j]){
                u = false;
            }
        }
        if (u) {
            tmp.push(arr[i]);
        }
    }
    return tmp;
}

//  Example
console.log(unique([1, 11, 34, 11, 52, 61, 1, 34]))
//  should print: `[1, 11, 34, 52, 61]`

