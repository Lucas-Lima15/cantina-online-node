const express = require("express")
const router = express.Router()

const ProductHandler = require("../handlers/product-handler")

router.get("/", ProductHandler.getProducts)

router.post("/", ProductHandler.postProduct)

module.exports = router