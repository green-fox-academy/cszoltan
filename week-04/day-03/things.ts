import {Comparable} from "./comparable";

class Thing implements Comparable{
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
}

export {Thing};
