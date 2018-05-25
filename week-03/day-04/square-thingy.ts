'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

canvas.width = canvas.scrollWidth;
canvas.height = canvas.scrollHeight;

class Square {
  private x: number;
  private y: number;
  private l: number;

  constructor (x: number, y: number, l: number) {
    this.x = x;
    this.y = y;
    this.l = l;
  }

  draw (c: CanvasGradient) {
    ctx.beginPath();
    ctx.fillStyle = c;
    ctx.fillRect(this.x, this.y, this.l, this.l);
  }
}

let start: number = Math.floor(Math.random() * 360);

function fractal (x: number, y: number, length: number): number {
  if (length <= 1) {
    return 1;
  } else {
    let ind: number = 1;
    for (let i: number = x; i < x + length - 1; i += Math.round(length / 3)) {
      let jnd: number = 1;
      for (let j: number = y; j < y + length - 1; j += Math.round(length / 3)) {
        
        if (ind === jnd && ind % 2 === 0) {

          let grad = ctx.createLinearGradient(i, j, i + Math.round(length / 3), j + Math.round(length / 3));
          grad.addColorStop (0, `hsl(${Math.floor(((i + j) / 36)) % 100 + start}, 100%, 50%)`);
          grad.addColorStop (1, `hsl(${Math.floor(((i + Math.round(length / 3) + j + Math.round(length / 3))  / 36)) % 100 + start}, 100%, 50%)`);
      
          let rect: Square = new Square(i, j, Math.round(length / 3));
          rect.draw(grad);
        } else {
        setTimeout(function(){ 
          fractal(i, j, Math.round(length / 3));
        }, 1000);}
        jnd++;
      }
      ind++;
    }
    return 0;
  }
}

fractal(0, 0, canvas.width);
