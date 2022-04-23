const mongoose = require("mongoose")

module.exports = mongoose.Schema({
	name: {
		type: String,
		required: true
	},
	price: {
		type: Number,
		required: true
	},
	category: {
		type: String,
		required: true
	},
})