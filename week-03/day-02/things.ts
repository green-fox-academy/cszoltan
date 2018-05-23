class Thing {
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
}

export {Thing};
