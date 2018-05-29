'use strict';

import {Aircraft} from "./aircraft";

class Carrier {
  aircrafts: Aircraft[];
  stock: number;
  health: number;

  constructor (stock: number, health: number) {
    this.aircrafts = [];
    this.stock = stock;
    this.health = health;
  }

  add(aircraft: Aircraft) {
    this.aircrafts.push(aircraft);
  }

  countAmmo(): number {
    let output: number = 0;

    this.aircrafts.forEach(value => {
      output += (value.maxAmmo - value.ammo);
    });

    return output;
  }

  getMaxDamage(): number {
    let damage: number = 0;

    this.aircrafts.forEach(value => {
      damage += value.ammo * value.baseDamage;
    });

    return damage;
  }

  fill() {
    if (this.countAmmo() < this.stock) {
      this.aircrafts.forEach(value => {
        this.stock = value.refill(this.stock);
      });
    } else {
      this.aircrafts.forEach(value => {
        if (value.isPriority()) {
          this.stock = value.refill(this.stock);
        }
      });
      let ind: number = 0;
      while (this.stock > 0) {
        if (!this.aircrafts[ind].isPriority) {
          this.stock = this.aircrafts[ind].refill(this.stock);
        }
      }
    }
  }

  fight(carrier: Carrier) {
    let damage: number = 0;

    this.aircrafts.forEach(value => {
      damage = value.fight();
    });

    carrier.health -= damage;
    if (carrier.health < 0) {
      carrier.health = 0;
    }
  }

  getStatus() {
    if (this.health === 0) {
      console.log('It\'s dead Jim :(');
    } else {
      console.log(`HP: ${this.health}, Aircraft count: ${this.aircrafts.length}, Ammo: Storage: ${this.stock}, Total Damage: ${this.getMaxDamage()}`);

      this.aircrafts.forEach(value => {
        console.log(value.getStatus());
      });
    }
  }
}
