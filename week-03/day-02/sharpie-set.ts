/*
Reuse your Sharpie class
Create SharpieSet class
it contains a list of Sharpie
countUsable() -> sharpie is usable if it has ink in it
removeTrash() -> removes all unusable sharpies
*/

import {Sharpie} from "./sharpie";

class SharpieSet {
  sharpies: Sharpie[] = [];

  countUsable(): number {
    let count: number = 0;
    this.sharpies.forEach(value => {
      if (value.inkAmount > 0) {
        count++;
      }
    });
    return count;
  }

  removeTrash () {
    this.sharpies = this.sharpies.map (value => {
      if (value.inkAmount === 0) {
        return value;
      }
    });
  }

}
