'use strict';

let sideA: number = 32.7;
let sideB: number = 12.33;
let sideC: number = 17;

let surface: number = (sideA * sideB) * 2 + (sideA * sideC) * 2 + (sideB * sideC) * 2;
let volume: number = sideA * sideB * sideC;

console.log(surface);
console.log(volume);