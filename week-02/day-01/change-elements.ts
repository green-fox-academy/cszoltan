// -  Create an array named `numList` with the following content: `[1, 2, 3, 8, 5, 6]`
// -  Change the 8 to 4 with the `.map` method 
// -  Print the fourth element as a test

'use strict';
export {};


let numList: number[] = [1, 2, 3, 8, 5, 6];
numList = numList.map(function (value): number {
    if (value === 8) {
        value = 4;
    }
    return value;
 });

 console.log(numList[3]);