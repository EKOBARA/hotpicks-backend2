const mongoose = require('../db/connections');

const StockSchema = new mongoose.Schema({
	title: String,
	description: String,
	image: String,
	zip: String,
	owner: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'User',
		required: true,
	},
});

const Stock = mongoose.model('Stock', StockSchema);

module.exports = Stock;
