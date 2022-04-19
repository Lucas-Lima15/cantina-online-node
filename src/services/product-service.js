class ProductService {
	static searchProduct(product) {
		if (product)
			return "product"
            
		return "products"
	}
}

module.exports = ProductService