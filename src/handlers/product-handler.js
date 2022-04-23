const ProductService = require("../services/product-service")

class ProductHandler {
	/**
	 * @route /product
	 * @method GET
	 * 
	 * Retorna json com todos os produtos do banco
	 * 
	 * @returns [products] json
	 */
	static async getProducts(req, res) {
		const response = await ProductService.searchProduct()

		return res.json(response)
	}

	/**
	 * @route /product
	 * @method POST
	 * 
	 * Salva um produto no banco de dados
	 * 
	 * @body
	 * @requires
	 * @String name
	 * @Number price
	 * @String category 
	 * 
	 * @returns product json
	 */
	static async postProduct(req, res) {
		const product = req.body

		const response = await ProductService.save(product)

		return res.json(response)
	}
}

module.exports = ProductHandler