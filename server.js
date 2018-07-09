const express = require('express');

const app = express();


app.get('/', (req, res) => {
  res.send("hello from the server")
});



app.listen(300, () => {
  console.log(' I am listening on port 3000');
});



