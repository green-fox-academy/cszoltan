'use strict';

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