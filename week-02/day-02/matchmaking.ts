'use strict';

// Write a function that joins two array by matching one girl with one boy in a new array
// Exepected output: ["Eve", "Joe", "Ashley", "Fred"...]

function makingMatches (iGirls: string[], iBoys: string[]): string[] {
    let out: string[] = [];
    let pairs: number;

    if (iGirls.length > iBoys.length) {
        pairs = iBoys.length;
    } else {
        pairs = iGirls.length;
    }

    for ( let i = 0; i < pairs; i++) {
        out.push(iGirls[i]);
        out.push(iBoys[i]);
    }

    return out;
}

let girls: string[] = ['Eve', 'Ashley', 'Bözsi', 'Kat', 'Jane'];
let boys: string[] = ['Joe', 'Fred', 'Béla', 'Todd', 'Neef', 'Jeff'];

console.log(makingMatches(girls, boys));

export = makingMatches;