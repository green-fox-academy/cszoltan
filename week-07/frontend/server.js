'use strict';

const PORT = 3000;
const app = require('./routes');

app.listen(PORT, () => {
  console.log('App is up and running on port ' + PORT);
});
