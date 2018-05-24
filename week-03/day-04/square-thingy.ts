'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

canvas.width = canvas.scrollWidth;
canvas.height = canvas.scrollHeight;

class Square {
  draw (x: number, y: number, l: number) {
    ctx.beginPath();
    ctx.strokeRect(x, y, l, l);
  }
}
let start: number = Math.random() * 360;
let rect: Square = new Square();

function fractal (x: number, y: number, length: number): number {
  if (length <= 1) {
    return 1;
  } else {
    let ind: number = 1;
    for (let i: number = x; i < x + length - 1; i += Math.round(length / 3)) {
      let jnd: number = 1;
      for (let j: number = y; j < y + length - 1; j += Math.round(length / 3)) {
        if (ind === jnd && ind % 2 === 0) {
          ctx.beginPath();
          ctx.fillStyle = `hsl(${((i + j) / 36) % 100 + start}, 100%, 50%)`;
          ctx.fillRect(i, j, Math.round(length / 3), Math.round(length / 3));
        }
        setTimeout(function(){ 
          fractal(i, j, Math.round(length / 3));
        }, 2000);
        jnd++;
      }
      ind++;
    }
    return 1;
  }
}

fractal(0, 0, canvas.width);
