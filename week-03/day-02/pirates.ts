class Pirate {
  toxicity: number;
  dead: boolean;
  out: boolean;
  parrot: boolean;

  constructor (parrot: boolean) {
    this.toxicity = 0;
    this.dead = false;
    this.out = false;
    this.parrot = parrot;
  }
  drinkSomeRum() {
    if (this.dead) {
      console.log('He\'s dead');
    } else {
      this.toxicity++;
    }
  }

  howsItGoingMate() {
    if (this.dead) {
      console.log('He\'s dead');
    } else {
      if (this.toxicity <= 4) {
        console.log('Pour me anudder!');
      } else {
        console.log('Arghh, I\'ma Pirate. How d\'ya d\'ink its goin?');
        this.out = true;
        this.toxicity = 0;
      }
    }
  }

  die () {
    this.dead = true;
  }

  brawl (pirate: Pirate) {
    if (!this.dead && !pirate.dead) {
      let chance: number = Math.floor(Math.random() * 3 + 1);
      switch (chance) {
        case 1: {
          this.dead = true;
        }
        case 2: {
          pirate.dead = true;
        }
        case 3: {
          this.out = true;
          pirate.out = true;
        }
      }
    }
  }
}

class Ship {
  crews: Pirate[] = [];
  captain: Pirate;

  fillShip () {
    let terry: number = Math.floor(Math.random() * 100 + 1);
    for (let i: number = 0; i < terry; i++) {
      let parrot: boolean = Math.random() > Math.random();
      this.crews.push(new Pirate(parrot));
    }
    this.captain = new Pirate(true);
  }

  print () {
    let logging: string = 'The ship\'s Captain is ';
    if (this.captain.dead) {
      logging += 'dead ';
    } else if (this.captain.out) {
      logging += 'passed out ';
    } else {
      logging += 'well ';
    }
    logging += `and he drank ${this.captain.toxicity}.\r\n`;

    let sum: number = 0;
    this.crews.forEach(value => {
      if (!value.dead) {
        sum++;
      }
    });

    logging += `Number of alive crewmates: ${sum}.`;
    console.log(logging);
  }
}
