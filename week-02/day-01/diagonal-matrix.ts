// -  Create (dynamically*) a two dimensional list
//    with the following matrix**. Use a loop!
//
//    0 0 0 1
//    0 0 1 0
//    0 1 0 0
//    1 0 0 0
//
// -  Print this two dimensional list to the console
//
// * size should depend on a variable
// ** Relax, a matrix is just like an array

'use strict';
export {};

let line: number = 4;
let column: number = 4;

let matrix: number[][] = [];
let temp: string = '';

for (let i = 0; i < line; i++) {
    temp = '';
    matrix[i] = [];
    for (let j = 0; j < column; j++) {
        if (column -1 - j === i) {
            matrix[i][j] = 1;
        } else {
            matrix[i][j] = 0;
        }
        temp += matrix[i][j];
    }
    console.log(temp);
}