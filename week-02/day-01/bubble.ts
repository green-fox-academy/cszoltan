//  Create a function that takes a list of numbers as parameter
//  Returns a list where the elements are sorted in ascending numerical order
//  Make a second boolean parameter, if it's `True` sort that list descending
//  Example:
'use strict';
export {};

function bubble(input: number[], desc?: boolean): number[] {
    input = input.slice(); 
    for(let i = 0; i < input.length; i++) {
        for(let j = 0; j < input.length - 1; j++) {

            if(input[j] > input[j + 1]) {
                let swap = input[j];
                input[j] = input[j + 1];
                input[j + 1] = swap;
            }
        }
    }
    if (desc === true) {
        input = input.reverse();
    }
    return input;
}

console.log(bubble([34, 12, 24, 9, 5]));
//  should print [5, 9, 12, 24, 34]
console.log(bubble([34, 12, 24, 9, 5], true));
//  should print [34, 24, 12, 9, 5]

/*function bubbleSort(array: number[]): number[] {
    array = array.slice(); // creates a copy of the array
    for(let i = 0; i < array.length; i++) {
        for(let j = 0; j < array.length - 1; j++) {

            if(array[j] > array[j + 1]) {
                let swap = array[j];
                array[j] = array[j + 1];
                array[j + 1] = swap;
            }
        }
    }
    return array;
}*/

