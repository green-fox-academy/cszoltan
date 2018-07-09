'use strict';

const Panama = {
  cash: 0,
  name: 'Panama',
  tax: '1%',
  deposit: function(amt) {
    this.cash += amt;
  }
};

const Cyprus = {
  cash: 0,
  name: 'Cyprus',
  tax: '5%',
  deposit: function(amt) {
    this.cash += amt;
  }
};

const Shuffler = {
  cash: 10000,
  turn: 0,
  amount: 1000,
  pick: function() {
    this.turn++;
    if (this.turn % 2 === 0) {
      Cyprus.deposit(this.amount);
      console.log(`${Cyprus.name} got ${this.amount}`);
      this.cash -= this.amount;
    } else {
      Panama.deposit(this.amount);
      console.log(`${Panama.name} got ${this.amount}`);
      this.cash -= this.amount;
    }
  }
};

Shuffler.pick(); // prints Panama got 1000
Shuffler.pick(); // prints Cyprus got 1000
Shuffler.pick(); // prints Panama got 1000
Shuffler.pick(); // prints Cyprus got 1000

console.log(Panama.cash); // 2000 
console.log(Cyprus.cash); // 2000 
