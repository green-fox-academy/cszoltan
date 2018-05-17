'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE
// create a line drawing function that takes 2 parameters:
// The x and y coordinates of the line's starting point
// and draws a line from that point to the center of the canvas.
// Fill the canvas with lines from the edges, every 20 px, to the center.

canvas.width = canvas.scrollWidth;
canvas.height = canvas.scrollHeight;

function drawingLine(x: number, y: number) {
  ctx.beginPath();

  ctx.moveTo(x, y);
  ctx.lineTo(canvas.width/2, canvas.height/2);

  ctx.strokeStyle = 'black';
  ctx.stroke();
}

for (let i:number = 0; i <= 600; i += 20){
  for (let j: number = 0; j <= 400; j += 20) {
    if (i === 0 || j === 0 || i === 600 || j === 400) {
      drawingLine(i, j);
    }
  }
}
