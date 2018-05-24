'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');


canvas.width = canvas.scrollWidth;
canvas.height = canvas.scrollHeight;

ctx.beginPath();
ctx.fillStyle = 'yellow';
ctx.fillRect(0,0,canvas.width,canvas.height);

function drawBoxes(length: number, x: number, y: number) {
  if (length <= 6) {
    return 1;
  } else {
    let ind: number = 1;
    for (let i: number = x; i < x + length - 1; i += Math.round(length / 3)) {
      let jnd: number = 1;
      for (let j: number = y; j < y + length - 1; j += Math.round(length / 3)) {
        ctx.beginPath();
        ctx.strokeRect(i, j, Math.round(length / 3), Math.round(length / 3));
        if ((ind % 2 === 0 || jnd % 2 === 0) && jnd != ind) {
          drawBoxes(Math.round(length / 3), i, j);
        }
        jnd++;
      }
      ind++;
    }
    return /*drawBoxes(Math.round(length / 3), x + Math.round(length / 3), y + Math.round(length / 3))*/ 1;
  }
}

drawBoxes(canvas.width, 0, 0);
