'use strict';

let pwHide = document.querySelector('img');

pwHide.addEventListener('mousedown', () => {
  document.querySelector('#pass').setAttribute('type', 'text');
});

pwHide.addEventListener('mouseup', () => {
  document.querySelector('#pass').setAttribute('type', 'password');
});

pwHide.addEventListener('mouseleave', () => {
  document.querySelector('#pass').setAttribute('type', 'password');
});

