'use strict';

export let whoWins = (white, black) => {
  let whiteHand = handCheck(white);
  let blackHand = handCheck(black);

  if (whiteHand[0] > blackHand[0]) {
    return `White wins! - (Highcard: ${whiteHand[1]})`;
  } else if (blackHand[0] > whiteHand[0]) {
    return `Black wins! - (Highcard: ${blackHand[1]})`;
  } else {
    return 'Tie!';
  }
};

export let handCheck = (hand) => {
  let sum = 0;
  hand.forEach((card) => {
    switch (card.charAt(0)) {
      case 'T':
        sum += 10;
        break;
      case 'J':
        sum += 11;
        break;
      case 'Q':
        sum += 12;
        break;
      case 'K':
        sum += 13;
        break;
      case 'A':
        sum += 14;
        break;
      default:
        sum += +card.charAt(0);
    }
  });
  return [sum, hand[hand.length - 1].charAt(0)];
};

export let numberCheck = (cards) => {
  let output = {};
  cards.forEach(card => {
    
  });
}