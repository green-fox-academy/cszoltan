const express = require('express');
const app = express();
const PORT = 3000;

// set the view engine to ejs
app.set('view engine', 'ejs');

// home page
app.get('/', (req, res) => {
  // render `home.ejs`
  let greet = 'Welcome back, Guest!';
  if (req.query.name) {
    greet = `Welcome back, ${req.query.name}!`;
  }
  res.render('home', {
    title: 'Hello',
    greeter: greet
  });
});

// start express app on port 3000
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
