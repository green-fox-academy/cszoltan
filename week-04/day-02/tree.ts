import {Plant} from "./plant";

class Tree extends Plant{
  constructor (color: string) {
    super(color);
  }

  absorb(water: number) {
    this.need += water * 0.4; 
  }

  printNeed() {
    if (this.need >= 10) {
      console.log(`The ${this.color} tree doesn't need water`);
    } else {
      console.log(`The ${this.color} tree needs water`);
    }

  }
}

export {Tree};
