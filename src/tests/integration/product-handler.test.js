/* eslint-disable no-undef */
const request = require("supertest")
const server = require("../../../server")
const mongoose = require("mongoose")
const Product = require("./../../models/product")
const productMock = require("./../mock/product")

describe("product-handle routes", () => {

	describe("/product GET", () => {

		it("should return 200 and products in database",async () => {
			await Product.insertMany(productMock)
    
			const response = await request(server).get("/product")
				.expect(200)
    
			expect(JSON.stringify(response.body[0])).toBe(JSON.stringify(productMock))
		})
	})
    
	beforeEach(async () => {
		await Product.deleteMany()
	})

	afterAll(() => {
		mongoose.connection.close()
	})
})