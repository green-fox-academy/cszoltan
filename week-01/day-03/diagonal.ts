export {};
'use strict';

let line: number = 30;
let out: string = "";
// Write a program that draws a
// square like this:
//
// %%%%%
// %%  %
// % % %
// %  %%
// %   %
// %%%%%
//
// The square should have as many lines as lineCount is

/*for (let i = 1; i <= line; i++) {
    out = "";
    if (i === 1 || i === line) {
        for (let j = 1; j <= line; j++) {
            out += "%";
        }   
    } else {
        for (let j = 1; j <= line; j++) {
            if (j === 1 || j === line || j === i) {
                out += "%";
            } else {
                out += " ";
            }
        }
    }
    console.log(out);        
}*/

for (let i = 1; i <= line; i++) {
    out = "";
        for (let j = 1; j <= line; j++) {
            if (j === 1 || j === line || j === i || i=== 1 || i === line) {
                out += "%";
            } else {
                out += " ";
            }
        }
    console.log(out);        
}