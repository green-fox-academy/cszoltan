'use strict';
var currentHours = 14;
var currentMinutes = 34;
var currentSeconds = 42;
var remainingSeconds = 60 - currentSeconds;
var remainingMinutes = 60 - currentMinutes;
var remainingHours = 24 - currentHours;
if (currentSeconds > 0) {
    remainingMinutes -= 1;
}
if (currentMinutes > 0) {
    remainingHours -= 1;
}
remainingMinutes += remainingHours * 60;
remainingSeconds += remainingMinutes * 60;
