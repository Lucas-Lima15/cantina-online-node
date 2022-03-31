const express = require('express');
const app = express();

const routeSite = require('./routes/site');

app.use(routeSite);

app.listen(3000);