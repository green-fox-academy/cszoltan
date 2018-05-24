class DiceSet {
  // You have a `DiceSet` class which has a list for 6 dices
  // You can roll all of them with roll()
  // Check the current rolled numbers with getCurrent()
  // You can reroll with reroll()
  // Your task is to roll the dices until all of the dices are 6
  dices: number[];
  readonly numOfDices: number = 6;
  
  roll(): number[] {
    this.dices = [];
    for(let i: number = 0; i < this.numOfDices; i++) { 
      this.dices.push(Math.floor(Math.random() * 6 + 1));
    }
    return this.dices;
  }
  
  reroll(index?: number) {
    if(index == undefined) {
      for(let i: number = 0; i < this.numOfDices; i++) { 
        this.dices[i] = Math.floor(Math.random() * 6 + 1);
      }
    } else {
      this.dices[index] = Math.floor(Math.random() * 6 + 1);
      }
  }
      
  getCurrent(index?: number) {
    if(index == undefined) {
      for(let i: number = 0; i < this.numOfDices; i++) { 
        console.log(this.dices[i]);
      }
    } else {
      console.log(this.dices[index]);
    }        
  }
}
  
let diceSet = new DiceSet();

diceSet.roll();

let isSix: boolean = false;
let ind: number;

while (!isSix) {
  ind = 0;
  isSix = true;
  diceSet.dices.forEach(value => {
    if (value != 6) {
      isSix = false;
      diceSet.reroll(ind);
    }
    ind++;
  });
  diceSet.getCurrent();
  console.log("------------------");
}
