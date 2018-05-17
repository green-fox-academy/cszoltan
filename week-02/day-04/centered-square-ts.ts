'use strict';
//export{};
const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE
// Draw a green 10x10 square to the center of the canvas.

canvas.width = canvas.scrollWidth;
canvas.height = canvas.scrollHeight;

ctx.beginPath();

let middleW = canvas.width / 2;
let middleH = canvas.height / 2;

/*ctx.moveTo(middleW-5, middleH-5);
ctx.lineTo(middleW-5, middleH+5);
ctx.lineTo(middleW+5, middleH+5);
ctx.lineTo(middleW+5, middleH-5);
ctx.lineTo(middleW-5, middleH-5);



ctx.strokeStyle = 'green';
ctx.stroke();*/

ctx.strokeRect(middleW - 5, middleH - 5, 10, 10);
