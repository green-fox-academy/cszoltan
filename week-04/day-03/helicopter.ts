'use strict';

import {Flyable} from "./flyable";
import {Vehicle} from "./vehicle";

class Helicopter extends Vehicle implements Flyable {
  land (): void {
    console.log(`${this.name} is landing.`);
  }
  takeOff(): void {
    console.log(`${this.name} is taking off.`);
  }
  fly(): void {
    console.log(`${this.name} is flying.`);
  }
}
