'use strict';
var lineCount = 8;
for (var i = 1; i <= lineCount; i++) {
    var line = "";
    for (var j = 1; j <= i; j++) {
        line += "*";
    }
    console.log(line);
}
