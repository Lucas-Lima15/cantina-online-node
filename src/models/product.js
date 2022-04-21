const mongoose = require("mongoose")

const productSchema = require("../schemas/product-schema") 

module.exports = mongoose.model("product", productSchema, "products")