'use strict';
export {};

class PostIt {
  backgroundColor: string;
  text: string;
  textColor: string;

  constructor(bgc: string, t: string, tc: string) {
    this.backgroundColor = bgc;
    this.text = t;
    this.textColor = tc;
  }
}

let idea = new PostIt('orange', 'Idea 1', 'blue');
let awesome = new PostIt('pink', 'Awesome', 'black');
let superb = new PostIt('yellow', 'Superb!', 'green');

/*
Create a PostIt a class that has
a backgroundColor
a text on it
a textColor
Create a few example post-it objects:
an orange with blue text: "Idea 1"
a pink with black text: "Awesome"
a yellow with green text: "Superb!"
*/
