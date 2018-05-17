'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');


canvas.width = canvas.scrollWidth;
canvas.height = canvas.scrollHeight;


let right: number[] = [canvas.width, canvas.height / 2];
let bottom: number[] = [canvas.width /2, canvas.height];
let topp: number[] = [canvas.width / 2, 0];
let left: number[] = [0, canvas.height / 2];
let lines: number = 80;
let stepw: number[] = [canvas.width / lines, 0];
let steph: number[] = [canvas.height / lines, 0];

function drawLines(r: number[], b: number[], t: number[], l: number[], sw: number, sh: number) {
  let m: number[] = [canvas.width / 2, canvas.height / 2];
  ctx.beginPath();

  ctx.moveTo(t[0], t[1]);
  ctx.lineTo(m[0] + sw, m[1]);

  ctx.moveTo(r[0], r[1]);
  ctx.lineTo(m[0], m[1] - sh);

  ctx.moveTo(r[0], r[1]);
  ctx.lineTo(m[0], m[1] + sh);

  ctx.moveTo(b[0], b[1]);
  ctx.lineTo(m[0] - sw, m[1]);

  ctx.moveTo(l[0], l[1]);
  ctx.lineTo(m[0], m[1] - sh);

  ctx.strokeStyle = 'green';
  ctx.stroke();
}

for (let i: number = 0; i < lines / 2; i++) {
  drawLines(right, bottom, topp, left, stepw[1], steph[1]);
  topp[1] += steph[0];
  right[0] -= stepw[0];
  bottom[1] -= steph[0];
  left[0] += stepw[0];
  stepw[1] = 0 + (canvas.width / lines) * i;
  steph[1] = 0 + (canvas.height / lines) * i;
}