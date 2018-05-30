abstract class Instrument {
  protected name: string;

  constructor(name: string) {
    this.name = name;
  }

  abstract play(): void;
}

abstract class StringedInstrument extends Instrument {
  numberOfStrings: number;

  constructor(name: string, strings: number) {
    super(name);
    this.numberOfStrings = strings;
  }

  abstract sound(): string;

  play(): void {
    console.log(`${this.name}, a ${this.numberOfStrings}-stringed instrument that goes ${this.sound()}`);
  }
}

export {StringedInstrument};
export {Instrument};
