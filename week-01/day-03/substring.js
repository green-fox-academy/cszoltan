'use strict';
exports.__esModule = true;
//  Create a function that takes two strings as a parameter
//  Returns the starting index where the second one is starting in the first one
//  Returns `-1` if the second string is not in the first one
function substr(str, keyword) {
    return str.indexOf(keyword);
}
//  Example
console.log(substr("this is what I'm searching in", "searching"));
// should print: `17`
console.log(substr("this is what I'm searching in", "not"));
