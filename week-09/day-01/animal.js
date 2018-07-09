'use strict';

class Animal {

  constructor() {
    this.hunger = 50;
    this.thirst = 50;
  }

  eat() {
    --this.hunger;
  }

  drink() {
    --this.thirst;
  }

  play() {
    ++this.hunger;
    ++this.thirst;
  }
}

class Farm {

  constructor(slots) {
    this.slots = slots;
    this.freeSlots = this.slots;
    this.animals = [];
  }

  breed() {
    if (this.freeSlots > 0) {
      this.animals.push(new Animal);
      this.freeSlots--;
    }
  }

  slaughter() {
    let leastHungryAnimal;
    let leastHungryIndex;
    this.animals.forEach((animal, index) => {
      if (!leastHungryAnimal) {
        leastHungryAnimal = animal;
        leastHungryIndex = index;
      } else if (animal.hunger < leastHungryAnimal.hunger) {
        leastHungryAnimal = animal;
        leastHungryIndex = index;
      }
    });
    console.log(leastHungryAnimal);
    this.animals.splice(leastHungryIndex, 1);
    this.freeSlots++;
  }
  report() {
    let string = '';
    string += `We have ${this.slots - this.freeSlots} living animals, we are `;
    if (this.freeSlots === 0) {
      string += 'full.';
    } else if (this.freeSlots === this.slots) {
      string += 'bankrupt.';
    } else {
      string += 'okay.';
    }
    console.log(string);
  }
  progress() {
    this.animals.forEach(animal => {
      if (Math.random() < 0.5) {
        animal.eat();
      }
      if (Math.random() < 0.5) {
        animal.drink();
      }
      if (Math.random() < 0.5) {
        animal.play();
      }
    });
    this.breed();
    this.slaughter();
    this.report();
  }
}

// Create a sheep farm with 20 slots
const SheepFarm = new Farm(20);

console.log(SheepFarm.animals); // Should log 20 Animal objects

const button = document.querySelector('button');
button.addEventListener('click', SheepFarm.progress.bind(SheepFarm));

// Add a click event to the button and call 'progress'

// The progress function should log the following to the console:
//  -  The farm has 20 living animals, we are full