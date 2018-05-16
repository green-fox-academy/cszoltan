// Write a function that takes a filename as string,
// open and read it. The file data represents a tic-tac-toe
// game result. Return 'X'/'O'/'draw' based on which player
// has winning situation.

'use strict';
export {};

declare function require(path: string): any;
let fs = require('fs');
let charEncoding: string = 'utf8';

function ticTacResult(input: string): string {
  let myFile: string = fs.readFileSync(input, charEncoding);
  let temp: string[] = myFile.split('\n');
  let out: string = 'draw';
  let oWon: Boolean = false;
  let xWon: Boolean = false;
  temp.forEach(value => {
    if (value === 'OOO') {
      oWon = true;
    }
    if (value === 'XXX') {
      xWon = true;
    }
  });
  let col: string = '';
  let diaL: string = '';
  let diaR: string = '';
  
  for (let j: number = 0; j < 3; j++) {
    col = '';
    for (let i: number = 0; i < 3; i++) {
      col += temp[i][j];
      if (i === j) {
        diaL += temp[i][j];
      }
      if (i === 3 - 1 - j) {
        diaR += temp[i][j];
      }
    }
    if (col === 'OOO') {
      oWon = true;
    }
    if (col === 'XXX') {
      xWon = true;
    }
  }
  if (diaR === 'OOO' || diaL === 'OOO') {
    oWon = true;
  }
  if (diaR === 'XXX' || diaL === 'XXX') {
    xWon = true;
  }
  if (!oWon && !xWon) {
    return 'draw';
  } else if (!oWon) {
    return 'X';
  } else {
    return 'O';
  }
}

console.log(ticTacResult('win-o.txt'))
// should print O
console.log(ticTacResult('win-x.txt'))
// should print X
console.log(ticTacResult('draw.txt'))
// should print draw

/*for (let i: number = 0; i < 3; i++) {
    resultO[0] = 0;
    for (let j: number = 0; j < 3; j++) {
      if (temp[i][j] === 'O') {
        resultO[0] ++;
      }
      if (temp[i][j] === 'O' && j === i) {
        resultO[0] ++;
      }
    }
  }*/