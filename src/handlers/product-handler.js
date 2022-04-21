const ProductService = require("../services/product-service")

class ProductHandler {
	static async getProducts(req, res) {
		const response = await ProductService.searchProduct()

		return res.json(response)
	}

	static postProduct(req, res) {
		const product = req.body
		console.log(product)

		const response = ProductService.save(product)

		return res.json(response)
	}
}

module.exports = ProductHandler