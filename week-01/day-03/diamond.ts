'use strict';
export {};

let line: number = 20;

let out: string = "";
let k = 1;
let middle: boolean = false;
for (let i = 1; i <= line; i++) {    
    out = "";
    for (let j = 1; j <= Math.abs(Math.ceil(line / 2) - i); j++) {
        out += " ";
    }
    for (let m = 1; m <= k; m++) {
        out += "*";
    }
    if ((k < line && k < line -1 ) && !middle) {
        k += 2;
    } else {
        middle = true;
    }
    if (middle) {
        k -= 2;
    }
    console.log(out);
    if (i === Math.ceil(line / 2) && line % 2 === 0) {
        console.log(out);
    }
}

    /*

---*---
--***--
-*****-
*******
-*****-
--***--
---*---







    */