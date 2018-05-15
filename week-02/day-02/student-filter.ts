'use strict';
export {};

let students: any[] = [
  {name: 'Rezso', age: 9.5, candies: 2},
  {name: 'Zsombor', age: 12, candies: 5},
  {name: 'Aurel', age: 7, candies: 3},
  {name: 'Olaf', age: 12, candies: 7},
  {name: 'Gerzson', age: 10, candies: 1},
];

// create a function that takes a list of students and logs:
// - Who has got more candies than 4 candies
// create a function that takes a list of students and logs: 
//  - how many candies they have on average

function lotOfCandy (input: any[]) {
  input.forEach(function (value) {
    if (value.candies > 4) {
      console.log(value.name);
    }
  });
}

function avgCandy (input: any[]): number {
  let avg: number = 0;
  input.forEach (function (value) {
    avg += value.candies
  });
  avg /= input.length;
  return avg;
}

lotOfCandy(students);
console.log(avgCandy(students));
