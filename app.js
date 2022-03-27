const express = require('express');
const app = express();

app.get('/', (req, res, next) => {
  res.send('Olá mundo');
});

app.listen(3000);