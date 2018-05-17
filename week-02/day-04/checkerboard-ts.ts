'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE
// Fill the canvas with a checkerboard pattern.

canvas.width = canvas.scrollWidth;
canvas.height = canvas.scrollHeight;

let black: boolean = true;

function chess(x: number, y: number, size: number, color: boolean): boolean {
  ctx.beginPath();
  if (color) {
    ctx.fillStyle = 'black';
  } else {
    ctx.fillStyle = 'white'
  }
  
  ctx.fillRect(x, y, size, size);

  return !color;
}

for (let i: number = 0; i < 400; i += 40) {
  for ( let j: number = 0; j < 600; j += 40) {
    black = chess(j, i, 40, black);
  }
}
