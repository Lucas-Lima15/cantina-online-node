const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const app = express();

mongoose.connect("mongodb://localhost/cantina-online");
const db = mongoose.connection;
db.on("error", (error) => console.log(error));
db.once("open", () => console.log("Connected to Database"));

const studentRouter = require("./routes/student");

app.use(express.json());

app.use("/aluno", studentRouter);

app.listen(3000);
