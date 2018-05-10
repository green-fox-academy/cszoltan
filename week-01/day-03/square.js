'use strict';
exports.__esModule = true;
var line = 6;
var out = "";
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
/*for (let i = 1; i <= line2; i++) {
    if (i === 1 || i === line2) {
        console.log("%%%%%");
    }else {
        console.log("%   %");
    }
}*/
for (var i = 1; i <= line; i++) {
    out = "";
    if (i === 1 || i === line) {
        for (var j = 1; j <= line; j++) {
            out += "%";
        }
    }
    else {
        for (var j = 1; j <= line; j++) {
            if (j === 1 || j === line) {
                out += "%";
            }
            else {
                out += " ";
            }
        }
    }
    console.log(out);
}
