'use strict';

let favouriteNumber: number = 6;

console.log('My favourite number is: ${favouriteNumber}');


let a: number = 123;
let b: number = 526;
let c: number;

c = a;
a = b;
b = c;

console.log(a);
console.log(b);

let massInKg: number = 81.2;
let heightInM: number = 1.78;
let bmi: number;

bmi = massInKg / (heightInM * heightInM);

console.log(bmi);

let myName: string = "Csikos Zoltan";
let myAge: number = 25;
let myHeight: number = 1.82;
let amIMarried: boolean = false;

console.log(myName);
console.log(myAge);
console.log(myHeight);
console.log(amIMarried);

let a2: number = 3;
// make it bigger by 10
a2 += 10;
console.log(a2);

let b2: number = 100;
// make it smaller by 7
b2 -= 7;
console.log(b2);

let c2: number = 44;
// double c's value
c2 *= 2;
console.log(c2);

let d: number = 125;
// divide d's value by 5
d /= 5;
console.log(d);

let e: number = 8;
// what's the cube of e's value?
e *= e * e;
console.log(e);

let f1: number = 123;
let f2: number = 345;
// tell if f1 is bigger than f2 (as a boolean)
let f: boolean = f1 > f2;
console.log(f);

let g1: number = 350;
let g2: number = 200;
let g: boolean = (2*g2) > g1;
console.log(g);

// tell if the double of g2 is bigger than g1 (pras a boolean)
let h: number = 1357988018575474;
console.log(h % 11 == 0);

// tell if h has 11 as a divisor (as a boolean)
let i1: number = 10;
let i2: number = 3;
let i: boolean = (i1 > i2*i2) && (i1 < i2*i2*i2);
console.log(i);

// tell if i1 is higher than i2 squared and smaller than i2 cubed (as a boolean)
let j: number = 1521;
console.log((j % 3 == 0) || (j % 5 == 0));
// tell if j is dividable by 3 or 5 (as a boolean)
let k: string = 'Apple';
for (let i = 0; i < 2; i++){
    k += k;
}
// fill the k variable with its content 4 times
console.log(k);

let sideA: number = 32.7;
let sideB: number = 12.33;
let sideC: number = 17;

let surface: number = (sideA * sideB) * 2 + (sideA * sideC) * 2 + (sideB * sideC) * 2;
let volume: number = sideA * sideB * sideC;

console.log(surface);
console.log(volume);

let currentHours: number = 14;
let currentMinutes: number = 34;
let currentSeconds: number = 42;

let remainingSeconds: number = 60 - currentSeconds;
let remainingMinutes: number = 60 - currentMinutes;
let remainingHours: number = 24 - currentHours;

if (currentSeconds > 0) {
    remainingMinutes -= 1;
}
if (currentMinutes > 0) {
    remainingHours -= 1;
}
remainingMinutes += remainingHours * 60;
remainingSeconds += remainingMinutes * 60;

console.log(remainingSeconds);