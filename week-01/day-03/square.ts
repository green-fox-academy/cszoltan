'use strict';

let line2: number = 20;

// Write a program that draws a square like this:
//
// %%%%%
// %   %
// %   %
// %   %
// %   %
// %%%%%
//
// The square should have as many lines as lineCount is

for (let i = 1; i <= line2; i++) {
    if (i === 1 || i === line2) {
        console.log("%%%%%");
    }else {
        console.log("%   %");
    }
}
