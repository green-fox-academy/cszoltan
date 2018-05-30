import {Instrument} from "./instrument";
import {StringedInstrument} from "./instrument";

class Violin extends StringedInstrument {
  constructor (strings: number = 4) {
    super('Violin', strings);
  }

  sound(): string {
    return 'Screech';
  }
}

export {Violin};
