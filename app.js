const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const app = express();

mongoose.connect("mongodb://localhost/cantina-online");
const db = mongoose.connection;
db.on("error", (error) => console.log(error));
db.once("open", () => console.log("Connected to Database"));

const alunoRouter = require("./routes/aluno");

// app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/aluno", alunoRouter);

app.listen(3000);
