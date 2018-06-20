/*
Add an item that says 'The Green Fox' to the asteroid list.
Add an item that says 'The Lamplighter' to the asteroid list.
Add a heading saying 'I can add elements to the DOM!' to the .container.
Add an image, any image, to the container.
*/

'use strict';
let greenFox = document.createElement('li');
greenFox.innerHTML = 'The Green Fox';
let lampLighter = document.createElement('li');
lampLighter.innerHTML = 'The Lamplighter';
let heading = document.createElement('h1');
heading.innerHTML = 'I can add elements to the DOM!';
let image = document.createElement('img');
image.setAttribute('src', 'https://www.google.hu/logos/doodles/2018/world-cup-2018-day-7-5109361306238976-5666313846390784-ssw.png');
document.querySelector('ul.asteroids').appendChild(greenFox);
document.querySelector('ul.asteroids').appendChild(lampLighter);
document.querySelector('.container').appendChild(heading);
document.querySelector('.container').appendChild(image);
