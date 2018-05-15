'use strict';

// Saturn is missing from the planetList
// Insert it into the correct position
// Create a function called putSaturn() which has list parameter and returns the correct list.
// bonus for using some built in methods

function putSaturn (input: string[]): string[] {
    let temp: string[] = [];
    for (let i = 0; i < input.length; i++) {
        if (i === 5) {
            temp.push('Saturn');
        }
        temp.push(input[i]);
    }
    return temp;
}

let planetList: string[] = ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Uranus', 'Neptune'];

// Expected output: "Mercury", "Venus", "Earth", "Mars", "Jupiter", "Uranus", "Neptune", "Saturn"

console.log(putSaturn(planetList));

export = putSaturn;