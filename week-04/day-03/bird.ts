'use strict';

import {Flyable} from "./flyable";
import {Animals} from "./animal";

class Bird extends Animals implements Flyable {
  land (): void {
    console.log(`${this.getName()} is landing.`);
  }
  takeOff(): void {
    console.log(`${this.getName()} is taking off.`);
  }
  fly(): void {
    console.log(`${this.getName()} is flying.`);
  }
  breed (): void {
    
  }
}
