'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');


canvas.width = canvas.scrollWidth;
canvas.height = canvas.scrollHeight;


/*let right: number[] = [canvas.width, canvas.height / 2];
let bottom: number[] = [canvas.width / 2, canvas.height];
let topp: number[] = [canvas.width / 2, 0];
let left: number[] = [0, canvas.height / 2];
let lines: number = 10;
let stepw: number = canvas.width / lines;
let steph: number = canvas.height / lines;*/


let lines: number = 50;
let stepw: number = 0;
let steph: number = 0;

function drawLines(sw: number, sh: number) {
  let m: number[] = [300, 200];
  let r: number[] = [600, 200];
  let b: number[] = [300, 400];
  let t: number[] = [300, 0];
  let l: number[] = [0, 200];

  ctx.beginPath();

  ctx.moveTo(t[0], t[1] + sh);
  ctx.lineTo(m[0] + sw, m[1]);

  ctx.moveTo(r[0] - sw, r[1]);
  ctx.lineTo(m[0], m[1] + sh);

  ctx.moveTo(b[0], b[1] - sh);
  ctx.lineTo(m[0] - sw, m[1]);

  ctx.moveTo(l[0] + sw, l[1]);
  ctx.lineTo(m[0], m[1] - sh);

  ctx.strokeStyle = 'green';
  ctx.stroke();
}

for (let i: number = 0; i < lines ; i++) {
  drawLines(stepw, steph);
  stepw += 300 / lines;
  steph += 200 / lines;
}
