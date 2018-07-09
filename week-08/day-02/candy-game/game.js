'use strict';

//🍭🍭🍭

let candies = 0;
let lollies = 0;
let rate = 0;

let makeCandy = document.querySelector('.create-candies');
let buyLolly = document.querySelector('.buy-lollypops');
let candyRain = document.querySelector('.candy-machine');
buyLolly.disabled = true;
let statCandy = document.querySelector('.candies');
let statLolly = document.querySelector('.lollypops');
let statRate = document.querySelector('.speed');

makeCandy.addEventListener('click', () => {
  candies+=100;
  statCandy.innerHTML = candies;
  if (candies >= 100) {
    buyLolly.disabled = false;
  }
});

buyLolly.addEventListener('click', () => {
  lollies++;
  statLolly.innerHTML += '🍭';
  candies -= 100;
  statCandy.innerHTML = candies;
  if (candies < 100) {
    buyLolly.disabled = true;
  }
  if (lollies % 10 === 0) {
    rate++;
    statRate.innerHTML = rate;
    if (rate === 1) {
      startCandyGenerate();
    }
  }
});

candyRain.addEventListener('click', () => {
  rate *= 10;
  statRate.innerHTML = rate;
});

let startCandyGenerate = () => {
  setInterval(() => {
    candies += rate;
    statCandy.innerHTML = candies;
    if (candies >= 100) {
      buyLolly.disabled = false;
    }
  }, 1000);
};