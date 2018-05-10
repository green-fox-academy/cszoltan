'use strict';
exports.__esModule = true;
var line = 8;
var out = "";
var k = 1;
var middle = false;
for (var i = 1; i <= line; i++) {
    out = "";
    for (var j = 1; j <= Math.abs(Math.ceil(line / 2) - i); j++) {
        out += " ";
    }
    for (var m = 1; m <= k; m++) {
        out += "*";
    }
    if ((k < line && k < line - 1) && !middle) {
        k += 2;
    }
    else {
        middle = true;
    }
    if (middle) {
        k -= 2;
    }
    console.log(out);
    if (i === Math.ceil(line / 2) && line % 2 === 0) {
        console.log(out);
    }
}
