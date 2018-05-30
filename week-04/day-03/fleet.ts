import {Thing} from "./things";

class Fleet {
    private things: Thing[] = [];

    constructor(){}
    add(thing: Thing){
        this.things.push(thing);
    }
    complete(id: number) {
      this.things[id].complete();
    }
    /*print () {
      this.things.forEach(value => {
        let temp: string = '[';
        if (value.getStatus()) {
          temp += 'X';
        } else {
          temp += ' ';
        }
        temp += `] ${value.getName()}`;
        console.log(temp);
      });
    }*/
    sort () {
      this.things.sort(function (a: Thing, b: Thing): number {
        return a.compareTo(b);
      });
    }
}

export {Fleet};
