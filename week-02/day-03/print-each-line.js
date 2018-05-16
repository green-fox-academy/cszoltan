// Write a program that opens a file called 'my-file.txt', then prints
// each of lines form the file.
// If the program is unable to read the file (for example it does not exists),
// then it should print an error message like: 'Unable to read file: my-file.txt'

'use strict';
var fs = require('fs');

try {
    if (!fs.existsSync('my-file.txt')) {
        throw new Error('Unable to read file: my-file.txt');
    }    
    var myFile = fs.readFileSync('my-file.txt', 'utf8');
    console.log(myFile);
}
catch (e) {
    console.log(e.message);
}