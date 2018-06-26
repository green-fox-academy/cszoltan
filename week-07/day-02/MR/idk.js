'use strict';

setTimeout(() => greet('secret'), 1000);

function greetSecret() {
  greet('secret');
}

function greet(name) {
  console.log(`Hi ${name}!`);
}
