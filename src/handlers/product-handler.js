const ProductService = require("../services/product-service")

class ProductHandler {
	static getProducts(req, res) {
		const body = req.body

		const response = ProductService.searchProduct(body)

		return res.json({ body: response })
        
	}
}

module.exports = ProductHandler