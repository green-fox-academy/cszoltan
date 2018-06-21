'use strict';

let list = ['apple', 'banana', 'cat', 'dog'];
for (let i = 0; i < list.length; i++) {
  document.querySelectorAll('li')[i].innerText = list[i];
}
document.querySelector('ul').classList.add('coloring');
