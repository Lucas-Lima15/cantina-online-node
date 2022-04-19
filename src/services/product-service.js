const Product = require("../schemas/user-schema")

class ProductService {
	static async searchProduct(product) {
		const prod = new Product(product)
		await prod.save(product)
		return Product.find()
	}

	static async save(product) {
		const prod = new Product(product)
		await prod.save(product)
		return prod
	}
}

module.exports = ProductService