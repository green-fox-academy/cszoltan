'use strict';
exports.__esModule = true;
var line = 30;
var out = "";
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
for (var i = 1; i <= line; i++) {
    out = "";
    if (i === 1 || i === line) {
        for (var j = 1; j <= line; j++) {
            out += "%";
        }
    }
    else {
        for (var j = 1; j <= line; j++) {
            if (j === 1 || j === line || j === i) {
                out += "%";
            }
            else {
                out += " ";
            }
        }
    }
    console.log(out);
}
