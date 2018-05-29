import {Tree} from "./tree";
import {Flower} from "./flower";

class Garden {
  flowers: Flower[] = [];
  trees: Tree[] = [];

  addFlower(flower: Flower) {
    this.flowers.push(flower);
  }

  addTree(tree: Tree) {
    this.trees.push(tree);
  }

  info() {
    this.flowers.forEach(value => {
      value.printNeed();
    });
    this.trees.forEach(value => {
      value.printNeed();
    });
  }

  countNeedy(): number {
    let output: number = 0;
    this.flowers.forEach(value => {
      if (value.getNeed() < 5) {
        output++;
      }
    });
    this.trees.forEach(value => {
      if (value.getNeed() < 10) {
        output++;
      }
    });
    return output;
  }

  watering(water: number) {
    let portion: number = water / this.countNeedy();
    
    console.log(`\nWatering with ${water}`);

    this.flowers.forEach(value => {
      if (value.getNeed() < 5) {
        value.absorb(portion);
      }
    });

    this.trees.forEach(value => {
      if (value.getNeed() < 10) {
        value.absorb(portion);
      }
    });
  }
}

let garden: Garden = new Garden();

garden.addFlower(new Flower('yellow'));
garden.addFlower(new Flower('blue'));

garden.addTree(new Tree('purple'));
garden.addTree(new Tree('orange'));

garden.info();

garden.watering(40);
garden.info();

garden.watering(70);
garden.info();
