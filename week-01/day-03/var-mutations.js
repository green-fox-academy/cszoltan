'use strict';
var a = 3;
// make it bigger by 10
a += 10;
console.log(a);
var b = 100;
// make it smaller by 7
b -= 7;
console.log(b);
var c = 44;
// double c's value
c *= 2;
console.log(c);
var d = 125;
// divide d's value by 5
d /= 5;
console.log(d);
var e = 8;
// what's the cube of e's value?
e *= e * e;
console.log(e);
var f1 = 123;
var f2 = 345;
// tell if f1 is bigger than f2 (as a boolean)
var f = f1 > f2;
console.log(f);
var g1 = 350;
var g2 = 200;
var g = (2 * g2) > g1;
console.log(g);
// tell if the double of g2 is bigger than g1 (pras a boolean)
var h = 1357988018575474;
console.log(h % 11 === 0);
// tell if h has 11 as a divisor (as a boolean)
var i1 = 10;
var i2 = 3;
var i = (i1 > i2 * i2) && (i1 < i2 * i2 * i2);
console.log(i);
// tell if i1 is higher than i2 squared and smaller than i2 cubed (as a boolean)
var j = 1521;
console.log((j % 3 === 0) || (j % 5 === 0));
// tell if j is dividable by 3 or 5 (as a boolean)
var k = 'Apple';
for (var i_1 = 0; i_1 < 2; i_1++) {
    k += k;
}
// fill the k variable with its content 4 times
console.log(k);
