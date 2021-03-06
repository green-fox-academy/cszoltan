'use strict';
//export {};
const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE
// draw a red horizontal line to the canvas' middle.
// draw a green vertical line to the canvas' middle.
//600*400

canvas.width = canvas.scrollWidth;
canvas.height = canvas.scrollHeight;

ctx.beginPath();
ctx.moveTo(0, 200);
ctx.lineTo(600, 200);
ctx.strokeStyle = 'green';
ctx.stroke();

ctx.beginPath();
ctx.moveTo(300, 0);
ctx.lineTo(300,400);
ctx.strokeStyle = 'red';
ctx.stroke();
