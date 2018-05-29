class Plant {
  protected need: number;
  color: string;

  constructor(color: string) {
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
      console.log(`The ${this.color} plant doesn't need water`);
    } else {
      console.log(`The ${this.color} plant needs water`);
    }

  }
}

export { Plant };
