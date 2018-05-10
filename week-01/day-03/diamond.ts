'use strict';
export {};

let line: number = 7;

let out: string = "";
let half: number = line / 2;

for (let i = 1; i <= half; i++) {
    out = "";
    for (let j = 1; j <= line; j++) {
        if (j <= half - i || j > (half*2-1)-(half-i)) {
            out += "-";
        } else {
            out += "*";
        }
    }
    console.log(out);
}

/*let out34: string = '';
    for (let i = 1; i<=line; i++){
        out34 = "";
        if (i < line / 2 ) {
            for (let j = 1; j <= line; j++) {
                if (j <= line / 2 - i || j > (line - 1)-(line-i)) {
                    out34 += " ";
                } else {
                    out34 += "*";
                }
            }
        console.log(out34);
        }
    console.log(out34);

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