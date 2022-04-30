const express = require("express")
const app = express()

const mongoose = require("mongoose")
mongoose.connect("mongodb://localhost:27017/cantina-online")
const db = mongoose.connection
db.on("error", console.error.bind(console, "connection error: "))


app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const ProductRouter = require("./src/routes/product-routes")

app.use("/product", ProductRouter)

if (process.env.NODE_ENV !== "test") {
	app.listen(3000, () => {
		console.log("Server running")
	})
}

module.exports = app