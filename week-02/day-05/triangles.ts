'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');


canvas.width = canvas.scrollWidth;
canvas.height = canvas.scrollHeight;

let rows: number = 30;
let side: number = 10;
let height: number = Math.floor(Math.sqrt((side ** 2) + ((side / 2) ** 2)));
let x: number = 0;
let y: number = 400;


function drawTriangle (iX: number, iY: number, iSide: number, iHeight: number) {
  ctx.beginPath();
  ctx.moveTo(iX, iY);
  ctx.lineTo(iX + iSide, iY);
  ctx.lineTo(iX + iSide / 2, iY - iHeight);
  ctx.lineTo(iX, iY);
  ctx.stroke();
}

for (let i: number = rows; i >= 0; i--) {
  for (let j: number = 0; j < i; j++) {
    drawTriangle(x, y, side, height);
    x += side / 2;
    y -= height;
  }
  x = 0 + (side * (rows + 1 - i));
  y = 400;
}
