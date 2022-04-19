const express = require("express")
const router = express.Router()

const ProductHandler = require("../handlers/product-handler")

router.get("/", ProductHandler.getProducts)

module.exports = router