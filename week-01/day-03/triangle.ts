'use strict';

let lineCount: number = 8;

for (let i = 1; i <= lineCount; i++) {
    let line: string = "";
    for (let j = 1; j <= i; j++) {
        line += "*";
    }
    console.log(line);
}

// Write a program that draws a triangle like this:
//
// *
// **
// ***
// ****
//
// The triangle should have as many lines as lineCount is