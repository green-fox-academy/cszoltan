import {Comparable} from "./comparable";
import {Printable} from "./printable";

class Domino implements Comparable,  Printable{
  values: number[];
  constructor(valueA: number, valueB: number) {
      this.values = [valueA, valueB];
  }

  compareTo(domino: Domino): number {
    if (this.values[1] > domino.values[0]) {
      return 1;
    } else if (this.values[1] === domino.values[0]) {
      return 0;
    } else {
      return -1;
    }
  }

  printAllFields(): void {
    console.log(`[${this.values[0]}|${this.values[1]}]`);
  }
}

let dominoes: Domino[] = [];
dominoes.push(new Domino(5, 2));
dominoes.push(new Domino(4, 6));
dominoes.push(new Domino(1, 5));
dominoes.push(new Domino(6, 7));
dominoes.push(new Domino(2, 4));
dominoes.push(new Domino(7, 1));

dominoes.sort(function (a: Domino , b: Domino): number {
  return a.compareTo(b);
});

//console.log(dominoes);
for (let domino of dominoes) {
  domino.printAllFields();
}

export {Domino};
