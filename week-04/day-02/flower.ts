class Flower {
  private need: number;
  color: string;

  constructor (color: string) {
    this.color = color;
    this.need = 0;
  }

  absorb(water: number) {
    this.need += water * 0.75; 
  }

  getNeed() {
    return this.need;
  }

  printNeed() {
    if (this.need >= 5) {
      console.log(`The ${this.color} flower doesn't need water`);
    } else {
      console.log(`The ${this.color} flower need water`);
    }
  }
}

export {Flower};