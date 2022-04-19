const ProductService = require("../services/product-service")

class ProductHandler {
	static async getProducts(req, res) {
		const product = {
			name: "String",
			price: 36,
			type: "String"
		} 

		const response = await ProductService.searchProduct(product)

		return res.json({ body: response })
        
	}

	static postProduct(req, res) {
		const product = {
			name: "String",
			price: "Number",
			type: "String"
		} 

		const response = ProductService.save(product)

		return res.json({ body: response })
	}
}

module.exports = ProductHandler