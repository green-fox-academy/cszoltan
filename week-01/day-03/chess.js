'use strict';
exports.__esModule = true;
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
var out = "";
for (var i = 1; i <= 8; i++) {
    out = "";
    for (var j = 1; j <= 8; j++) {
        if ((i % 2 === 1 && j % 2 === 1) || (i % 2 === 0 && j % 2 === 0)) {
            out += "%";
        }
        else {
            out += " ";
        }
    }
    console.log(out);
}
