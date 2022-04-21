const express = require("express")
const app = express()

const mongoose = require("mongoose")
mongoose.connect("mongodb://localhost:27017/cantina-online")
const db = mongoose.connection
db.on("error", console.error.bind(console, "connection error: "))
db.once("open", function() {
	console.log("Connected successfully")
})

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const ProductRouter = require("./src/routes/product-routes")

app.use("/product", ProductRouter)

app.listen(3000, () => {
	console.log("Server running")
})