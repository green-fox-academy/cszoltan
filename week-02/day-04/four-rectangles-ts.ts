'use strict';
//export {};

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE
// Draw four different size and color rectangles.
// Avoid code duplication.

let colors: string[] = ['green', 'red', 'blue', 'brown'];

for (let i: number = 2; i < 6; i++) {
  ctx.beginPath();
  ctx.strokeStyle = colors[i-2];
  ctx.strokeRect(i * 11, i * 33, i* 41, i * 20);
}