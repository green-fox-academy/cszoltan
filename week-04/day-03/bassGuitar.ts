import {Instrument} from "./instrument";
import {StringedInstrument} from "./instrument";

class BassGuitar extends StringedInstrument {
  constructor (strings: number = 4) {
    super('Bass Guitar', strings);
  }

  sound(): string {
    return 'Duum-duum-duum';
  }
}

export {BassGuitar};
