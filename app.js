const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const alunoRouter = require('./routes/aluno');

// app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use('/aluno', alunoRouter);

app.listen(3000);