import {Instrument} from "./instrument";
import {StringedInstrument} from "./instrument";

class ElectricGuitar extends StringedInstrument {
  constructor (strings: number = 6) {
    super('Electric Guitar', strings);
  }

  sound(): string {
    return 'Twang';
  }
}

export {ElectricGuitar};
