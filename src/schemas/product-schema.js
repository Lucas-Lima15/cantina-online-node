const mongoose = require("mongoose")

module.exports = mongoose.Schema({
	name: {
		type: String,
		default: null
	},
	price: {
		type: Number,
		default: null
	},
	category: {
		type: String,
		default: null
	},
})