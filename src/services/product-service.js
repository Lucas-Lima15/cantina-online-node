const Product = require("../models/product")

/**
 * Contém serviços relacionados ao produto
 */
class ProductService {
	

	/**
	 * Consulta todos os produtos no banco de dados
	 * 
	 * @returns [products]
	 */
	static async searchProduct() {
		const products = await Product.find()
		return products.length ? products : "Nenhum produto cadastrado"
	}


	/**
	 * Salva um produto no banco de dados
	 * 
	 * @param {*} prod 
	 * @returns product
	 */
	static async save(prod) {
		const product = new Product(prod)
		await product.save(product)
		return product
	}
}

module.exports = ProductService