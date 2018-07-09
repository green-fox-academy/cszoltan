'use strict';

class Sharpie {

  constructor(color, width) {
    this.color = color;
    this.width = width;
    this.inkAmount = 100;
  }

  use() {
    this.inkAmount -= this.width;
    if (this.inkAmount < 0) {
      this.inkAmount = 0;
    }
  }
}

let sharpie = new Sharpie('blue', 3);

while (sharpie.inkAmount > 0) {
  sharpie.use();
  //console.log(sharpie.inkAmount);
}
