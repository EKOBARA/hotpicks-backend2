const express = require('express');
const router = express.Router();
const Stock = require('../models/Stocks');

const { requireToken } = require('../middleware/auth');

router.get('/', async (req, res, next) => {
	try {
		const stock = await Stock.find().populate({
			path: 'owner',
			select: 'username email',
		});
		res.status(200).json(stock);
	} catch (error) {
		next(error);
	}
});

router.get('/user/:id', async (req, res, next) => {
	try {
		const stocks = await Stock.find({ owner: { _id: req.params.id } });
		res.json(stocks);
	} catch (error) {
		next(error);
	}
});

router.get('/:id', async (req, res, next) => {
	try {
		const stock = await Stock.findById(req.params.id);
		res.json(stock);
	} catch (error) {
		next(error);
	}
});

router.post('/', async (req, res, next) => {
	try {
		const newstock = await Stock.create(req.body);
		res.status(201).json(newStock);
	} catch (error) {
		next(error);
	}
});

router.put('/:id', async (req, res, next) => {
	try {
		const id = req.params.id;
		const stock = await Stock.findByIdAndUpdate(id, req.body, { new: true });
		res.status(200).json(stock);
	} catch (error) {
		next(error);
	}
});

router.delete('/:id', async (req, res, next) => {
	try {
		const id = req.params.id;
		const deleted = await Stock.findByIdAndDelete({ _id: id });
		res.json(deleted);
	} catch (error) {
		next(error);
	}
});

router.delete('/user/:id', async (req, res, next) => {
	try {
		const stocks = await Stock.find({ owner: { _id: req.params.id } });
		res.json(stocks);
	} catch (error) {
		next(error);
	}
});

module.exports = router;
