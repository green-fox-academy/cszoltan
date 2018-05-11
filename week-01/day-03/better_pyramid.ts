'use strict';
export {};

let line: number = 5;
let out34: string = '';
let k: number = 1;

for (let i = 1; i<=line; i++){
    out34 = "";
    for (let j = 1; j <= line - i + k; j++) {
        if (j <= line - i) {
            out34 += " ";
        } else {
            out34 += "*";
        }
    }
//console.log ((line*2-1)-(line-i));
console.log(out34);
k += 2;
}

// ---*---
// --***--
// -*****-
// *******
//
// The pyramid should have as many lines as lineCount is