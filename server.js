const express = require("express")
const app = express()

const ProductRouter = require("./src/routes/product-routes")

app.use("/product", ProductRouter)

app.listen(3000, () => {
	console.log("Server running")
})