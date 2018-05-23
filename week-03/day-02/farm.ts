/*
Reuse your Animal class
Create a Farm class
it has list of Animals
it has slots which defines the number of free places for animals
breed() -> creates a new animal if there's place for it
slaughter() -> removes the least hungry animal
*/
import {Animal} from "./animal";

class Farm {
  animals: Animal[] = [];
  slots: number;

  breed() {
    if (this.slots > 0) {
      this.animals.push(new Animal);
      this.slots--;
    }
  }
  
  slaughter () {
    let hunger: number = 100;
    let id: number = 0;
    let i: number = -1;
    this.animals.forEach(value => {
      i++;
      if (value.hunger < hunger) {
        hunger = value.hunger;
        id = i;
      }
    });
    this.animals[id] = this.animals[this.animals.length - 1];
    this.animals.pop();
    this.slots++;
  }
}
