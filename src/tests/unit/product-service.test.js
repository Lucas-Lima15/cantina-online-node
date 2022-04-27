/* eslint-disable linebreak-style */
/* eslint-disable no-undef */
const ProductService = require("../../services/product-service")
const Product = require("../../models/product")
const mongoose = require("mongoose")
const productMock = require("../mock/product")

describe("ProductService", () => {
	beforeAll(() => {
		mongoose.connect("mongodb://localhost:27017/cantina-online-test")
		const db = mongoose.connection
		db.on("error", console.error.bind(console, "connection error: "))
	})

	afterAll(() => {
		mongoose.connection.close()
	})

	beforeEach(async () => {
		await Product.deleteMany()
	})

	it("Should return saved products in database", async () => {
		await Product.insertMany(productMock)

		const products = await ProductService.searchProduct()

		expect(JSON.stringify(products[0])).toBe(JSON.stringify(productMock))
	})
})