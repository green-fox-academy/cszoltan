'use strict';

let button = document.querySelector('button');

button.onclick = () => {
  if (button.classList.contains('partyKiller')) {
    document.body.classList.remove('party');
    document.querySelector('button').classList.remove('partyKiller');
  } else {
    document.body.classList.add('party');
    document.querySelector('button').classList.add('partyKiller');
  }
};
