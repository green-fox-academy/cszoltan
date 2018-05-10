'use strict';
export {};

let line: number = 4;

let out34: string = '';
    for (let i = 1; i<=line; i++){
        out34 = "";
        for (let j = 1; j <= line*2-1; j++) {
            if (j <= line - i || j > (line*2-1)-(line-i)) {
                out34 += " ";
            } else {
                out34 += "*";
            }
        }
    //console.log ((line*2-1)-(line-i));
    console.log(out34);
    }

// ---*---
// --***--
// -*****-
// *******
//
// The pyramid should have as many lines as lineCount is