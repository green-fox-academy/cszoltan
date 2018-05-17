'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE
// Draw the night sky:
//  - The background should be black
//  - The stars should be small squares
//  - The stars should have random positions on the canvas
//  - The stars should have random color (some shade of grey)

canvas.width = canvas.scrollWidth;
canvas.height = canvas.scrollHeight;

ctx.beginPath();
ctx.fillStyle = 'black';
ctx.fillRect(0, 0, canvas.width, canvas.height);

function drawStar(x: number, y: number, color: string) {
  ctx.beginPath();
  ctx.fillStyle = color;
  ctx.fillRect(x, y, 5, 5);
}

for (let i: number = 0; i < 100; i++) {
  let starX: number = Math.random() * 600 + 1;
  let starY: number = Math.random() * 400 + 1;
  let starC: number = Math.random() * 256;
  drawStar(starX, starY, `rgb(${starC}, ${starC}, ${starC})`);
}