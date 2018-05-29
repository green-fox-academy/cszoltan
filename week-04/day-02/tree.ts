class Tree {
  private need: number = 0;
  color: string;

  constructor (color: string) {
    this.color = color;
    this.need = 0;
  }

  absorb(water: number) {
    this.need += water * 0.4; 
  }

  getNeed() {
    return this.need;
  }

  printNeed() {
    if (this.need >= 10) {
      console.log(`The ${this.color} tree doesn't need water`);
    } else {
      console.log(`The ${this.color} tree need water`);
    }
  }
}

export {Tree};
