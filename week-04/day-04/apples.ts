'use strict';
import {test} from 'tape';

class Apple {
  getApple():string {
    return 'apples';
  }
}

test('Testing class method', t => {
  let apple: Apple = new Apple();
  t.equal(apple.getApple(), 'apples');
  t.end();
});
