'use strict';
//export {};
const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE
// draw a box that has different colored lines on each edge.

canvas.width = canvas.scrollWidth;
canvas.height = canvas.scrollHeight;

ctx.beginPath();

ctx.moveTo(10,10);
ctx.lineTo(10,60);

ctx.strokeStyle = 'blue';
ctx.stroke();

ctx.beginPath();

ctx.moveTo(10,60);
ctx.lineTo(60,60);

ctx.strokeStyle = 'purple';
ctx.stroke();

ctx.beginPath();

ctx.moveTo(60,60);
ctx.lineTo(60,10);

ctx.strokeStyle = 'green';
ctx.stroke();

ctx.beginPath();

ctx.moveTo(60,10);
ctx.lineTo(10,10);

ctx.strokeStyle = 'black';
ctx.stroke();
