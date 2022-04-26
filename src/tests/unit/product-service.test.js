/* eslint-disable no-undef */
const ProductService = require("../../services/product-service")
const Product = require("../../models/product")
const mongoose = require("mongoose")
const productMock = require("../mock/product")

describe("ProductService", () => {
	beforeAll(async () => {
		mongoose.connect("mongodb://localhost:27017/cantina-online-test")
		const db = mongoose.connection
		db.on("error", console.error.bind(console, "connection error: "))
		db.once("open", function() {
			console.log("Connected successfully")
		})
	})

	beforeEach(async () => {
		await Product.deleteMany()
	})

	it("searchProduct", async () => {
		await Product.insertMany(productMock)

		const products = await ProductService.searchProduct()

		console.log(products[0].name)
        
		expect(products[0]).toBe(productMock)
	})
})