// -  Create variable named `name` and assign the value `Greenfox` to it
// -  Create a function called `greet` that greets it's input parameter
//     -  Greeting is printing e.g. `Greetings, dear Greenfox`
//     -  Prepare for the special case when no parameters are given
// -  Greet `name`
'use strict';
export {};

function greet(input?: string) {
    if (input != null) {
        console.log(`Greetings, dear ${input}!`);
    } else {
        console.log('Greetings human!');
    }
}

let name: string = 'Greenfox';

greet(name);

