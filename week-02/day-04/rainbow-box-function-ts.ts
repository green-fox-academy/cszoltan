'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE
// Create a square drawing function that takes 2 parameters:
// The square size, and the fill color,
// and draws a square of that size and color to the center of the canvas.
// Create a loop that fills the canvas with rainbow colored squares.

canvas.width = canvas.scrollWidth;
canvas.height = canvas.scrollHeight;

function squareDraw(size: number, color: string) {
  let middleW = canvas.width / 2;
  let middleH = canvas.height / 2;

  size /= 2;

  ctx.beginPath();
  ctx.strokeStyle = color;
  ctx.strokeRect(middleW - size, middleH - size, size * 2, size *2);
}

for (let i: number = 1; i < 600; i++) {
  squareDraw(i, `hsl(${i % 360}, 100%, 50%)`);
}
