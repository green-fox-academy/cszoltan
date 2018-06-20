'use strict';

let peas = document.querySelectorAll('p');

if (peas[3].classList.contains('dolphin')) {
  document.querySelector('.apple').innerText = 'pear';
}

if (peas[0].classList.contains('apple')) {
  document.querySelector('.cat').innerText = 'dog';
}

document.querySelector('.apple').classList.add('red');
document.querySelector('.balloon').classList.remove('balloon');
