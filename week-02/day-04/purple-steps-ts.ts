'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE
// Reproduce this:
// [https://github.com/green-fox-academy/teaching-materials/blob/master/workshop/drawing/purple-steps/r3.png]

canvas.width = canvas.scrollWidth;
canvas.height = canvas.scrollHeight;

let size: number = 20;

function purpleSteps(x: number, y: number, size2: number) {
  ctx.beginPath;
  ctx.fillStyle = 'purple';
  ctx.fillRect(x, y, size2, size2);
  ctx.strokeStyle = 'black';
  ctx.strokeRect(x, y, size2, size2);
}

for (let i: number = 0; i < 400; i += size) {
  purpleSteps(i, i, size);
}
