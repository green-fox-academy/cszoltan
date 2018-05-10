'use strict';
export {};
// Create a program that draws a chess table like this
//
// % % % %
//  % % % %
// % % % %
//  % % % %
// % % % %
//  % % % %
// % % % %
//  % % % %
//
let out: string = "";

for (let i = 1; i <= 8; i++) {
    out = "";
    for (let j = 1; j <= 8; j++) {
        if ((i % 2 === 1 && j % 2 === 1) || (i % 2 === 0 && j % 2 === 0)) {
            out += "%";
        } else {
            out += " ";
        }
    }
    console.log(out);
}