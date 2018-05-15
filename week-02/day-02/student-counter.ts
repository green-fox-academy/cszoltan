'use strict';
export {};

let students: any[] = [
  {name: 'Teodor', age: 3, candies: 2},
  {name: 'Rezso', age: 9.5, candies: 2},
  {name: 'Zsombor', age: 12, candies: 5},
  {name: 'Aurel', age: 7, candies: 3},
  {name: 'Olaf', age: 12, candies: 7},
  {name: 'Gerzson', age: 10, candies: 1},
];

function candyCount (input: any[]): number {
  let out: number = 0;

  input.forEach(function (value) {
    out += value.candies;
  });

  return out;
}

function ageFewCandy (input: any[]): number {
  let out: number = 0;
  input.forEach(function (value) {
    if (value.candies < 5) {
      out += value.age;
    }
  });
  return out;
}

console.log(candyCount(students));
console.log(ageFewCandy(students));

// create a function that takes a list of students and logs: 
// - how many candies are owned by students
// create a function that takes a list of students and logs:
// - Sum of the age of people who have lass than 5 candies