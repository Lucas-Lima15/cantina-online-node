const Product = require("../models/product")

class ProductService {
	static async searchProduct() {
		const products = await Product.find()
		return products.length ? products : "Nenhum produto cadastrado"
	}

	static async save(prod) {
		const product = new Product(prod)
		await product.save(product)
		return product
	}
}

module.exports = ProductService