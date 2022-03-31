const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.set('views', './views');

const routeSite = require('./routes/site');

app.use(routeSite);

app.listen(3000);