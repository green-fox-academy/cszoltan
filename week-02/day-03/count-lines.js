// Write a function that takes a filename as string,
// then returns the number of lines the file contains.
// It should return zero if it can't open the file, and
// should not raise any error.

var fs = require('fs');
function countLines(input) {
  if (fs.existsSync(input)){
    var file = fs.readFileSync(input, 'utf8');
    var count = 0;
    //counting
    return count;
  } else {
    return 0;
  }
}
console.log(countLines('my-file.txt'));