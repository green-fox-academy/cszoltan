'use strict';
export {};

// Create a function that prints the ingredient list of dictionaries to the console in the following format:
//
// +--------------------+---------------+----------+
// | Ingredient         | Needs cooling | In stock |
// +--------------------+---------------+----------+
// | vodka              | Yes           | 1        |
// | coffee_liqueur     | Yes           | -        |
// | fresh_cream        | Yes           | 1        |
// | captain_morgan_rum | Yes           | 2        |
// | mint_leaves        | No            | -        |
// +--------------------+---------------+----------+
//
// OPTIONAL
// The frist columns should be automatically as wide as the longest key

let ingredients: any[] = [
  { name: 'vodka', in_stock: 1, needs_cooling: true },
  { name: 'coffee_liqueur', in_stock: 0, needs_cooling: true },
  { name: 'fresh_cream', in_stock: 1, needs_cooling: true },
  { name: 'captain_morgan_rum', in_stock: 2, needs_cooling: true },
  { name: 'mint_leaves', in_stock: 0, needs_cooling: false },
  { name: 'sugar', in_stock: 0, needs_cooling: false },
  { name: 'lime juice', in_stock: 0, needs_cooling: true },
  { name: 'soda', in_stock: 0, needs_cooling: true }
];

function tablePrint (input: any[]) {
  let line: string = '';
  let max: number = 0;
  input.forEach(function (value) {
    if (value.name.length > max) {
      max = value.name.length;
    }
  });
  line = '+';
  for (let i: number = 0; i <= max+1; i++){
    line += '-';
  }
  line += '+---------------+----------+';
  console.log(line);
  line = '| Ingredient';
  for (let i: number = 1; i <= max - 9; i++) {
    line += ' ';
  }
  line += '| Needs cooling | In stock |';
  console.log(line);
  line = '+';
  for (let i: number = 0; i <= max+1; i++){
    line += '-';
  }
  line += '+---------------+----------+';
  console.log(line);
  for (let i: number = 0; i < input.length; i++) {
    line = `| ${input[i].name}`;
    for (let j: number = 0; j < max + 1 - input[i].name.length; j++) {
      line += ' ';
    }
    line += '| ';
    if (input[i].needs_cooling) {
      line += 'Yes';
    } else {
      line += 'No ';
    }
    line += '           | ';  
    if (input[i].in_stock === 0) {
      line += '-';
    } else {
      line += input[i].in_stock;
    }
    line += '        |';
    console.log(line);
  }
  line = '+';
  for (let i: number = 0; i <= max+1; i++){
    line += '-';
  }
  line += '+---------------+----------+';
  console.log(line);
}

tablePrint(ingredients);