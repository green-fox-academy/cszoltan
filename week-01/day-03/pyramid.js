'use strict';
exports.__esModule = true;
var line = 4;
var out34 = '';
for (var i = 1; i <= line; i++) {
    out34 = "";
    for (var j = 1; j <= line * 2 - 1; j++) {
        if (j <= line - i || j > (line * 2 - 1) - (line - i)) {
            out34 += " ";
        }
        else {
            out34 += "*";
        }
    }
    //console.log ((line*2-1)-(line-i));
    console.log(out34);
}
