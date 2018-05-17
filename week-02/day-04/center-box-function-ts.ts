'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE
// Create a square drawing function that takes 1 parameter:
// The square size
// and draws a square of that size to the center of the canvas.
// Draw 3 squares with that function.
// Avoid code duplication.

canvas.width = canvas.scrollWidth;
canvas.height = canvas.scrollHeight;

function centerSquare(size: number) {
  ctx.beginPath();
  let middleW = canvas.width / 2;
  let middleH = canvas.height / 2;

  size /= 2;

  ctx.strokeRect(middleW - size, middleH - size, size * 2, size *2);
}

for (let i: number = 1; i < 4; i++) {
  centerSquare(i*50);
}