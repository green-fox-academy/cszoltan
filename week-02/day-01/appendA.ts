// -  Create an array variable named `animals`
//    with the following content: `["kuty", "macsk", "cic"]`
// -  Add all elements an `"a"` at the end

'use strict';
export {};

let animals: string[] = ['kuty', 'macsk', 'cic'];

animals = animals.map ( function (value): string {
    value += 'a';
    return value;
});

animals.forEach(function (value) {
    console.log(value);
});