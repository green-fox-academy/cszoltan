import {Plant} from "./plant";

class Flower extends Plant{
  constructor (color: string) {
    super(color);
  }

  printNeed() {
    if (this.need >= 5) {
      console.log(`The ${this.color} flower doesn't need water`);
    } else {
      console.log(`The ${this.color} flower needs water`);
    }

  }
}

export {Flower};