const path = require('path');

const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.set('views', './views');

const routeSite = require('./routes/site');

app.use(express.static(path.join(__dirname, 'public')));

app.use(routeSite);

app.listen(3000);