import {test} from "tape";
import {whoWins} from "./poker";

test('highcard', t => {
  let whiteHand = [
    '2H',
    '3D',
    '5S',
    '9C',
    'KD'
  ];
  let blackHand = [
    '2C',
    '3H',
    '4S',
    '8C',
    'AH'
  ];

  t.equal(whoWins(['2H'], ['2C']), 'Tie!');
  t.equal(whoWins(whiteHand, blackHand), 'White wins! - (Highcard: K)');
  t.end();
});

