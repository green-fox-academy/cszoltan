// Create a function that takes a number
// divides ten with it,
// and prints the result.
// It should print 'fail' if the parameter is 0

function divideTen (input: number) {
  let out: number = 10;
  try {
    if (input === 0) {
      throw new SyntaxError ('fail');
    }
    console.log (out / input);
  }
  catch(e) {
    console.log(e.message);
  }
}

divideTen(0);
