'use strict';

// Create a function called "appendA()" that adds "a" to every string in the far list.
// The parameter should be a list.

function appendA(input: string[]): string[] {
    return input.map(function (value): string {
        return value + "a";
    });
}

let far: string[] = ['kuty', 'macsk', 'kacs', 'rók', 'halacsk'];

console.log(appendA(far));

// The output should be: 'kutya', 'macska', 'kacsa', 'róka', 'halacska'

export = appendA;