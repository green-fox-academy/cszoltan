import {Comparable} from "./comparable";
import {Printable} from "./printable";

class Thing implements Comparable, Printable{
  private name: string;
  private completed: boolean;

  constructor(name: string){
      this.name = name;
      this.completed = false;
  }
  public complete() {
      this.completed = true;
  }
  getStatus (): boolean {
    return this.completed;
  }
  getName (): string {
    return this.name;
  }
  compareTo(thing: Thing): number {
    if (this.completed && !thing.getStatus()) {
      return 1;
    } else if (this. completed && thing.getStatus()) {
      return 0;
    } else if (!this.completed && !thing.getStatus()) {
      return 0;
    } else {
      return -1;
    }
  }
  printAllFields():void {
    let temp: string = '[';
    if (this.completed) {
      temp += 'X';
    } else {
      temp += ' ';
    }
    temp += `] ${this.name}`;
    console.log(temp);
  }
}

export {Thing};
