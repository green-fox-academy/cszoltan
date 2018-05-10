'use strict';

let line: number = 4;

let str: string = '';
    for (let i = 1; i<=line; i++){
        for (let k = 1; k <= line - i; k++){
            str += " ";
        }
        for (let j = 1; j <= i; j++){
            str += "* ";
        }
        console.log(str);
        str = "";
    }

// Write a program that draws a
// pyramid like this:
//
//    *
//   ***
//  *****
// *******
//
// The pyramid should have as many lines as lineCount is
