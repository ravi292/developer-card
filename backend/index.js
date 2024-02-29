if (process.env.NODE_ENV !== 'production')
	require('dotenv').config();

	const PORT = process.env.PORT;
	const express = require('express');
	const app = express();
	const Card = require('./db');
	const cardSchema = require('./schema');
	const cors = require('cors');
	app.use(express.json());
	app.use(cors());

	app.get('/api/cards', async (req, res) => {
		try {
			const cards = await Card.find({});
			res.json(cards);
		}
		catch(err) {
			console.log(err);
			res.sendStatus(500);
		}
	});

	app.post('/api/card', async (req, res) => {
		try {
			const card = req.body.card;
			const response = cardSchema.safeParse(card);
			if(!response.success) {
				return res.status(400).json({error: true, success: false, message: "Invalid card data"});
			}
			await Card.create(card);
			res.status(200).json({error:false, success:true, message:'Card created successfully'});
		}
		catch(err) {
			console.log(err);
			res.sendStatus(500);
		}
	});

	app.listen(PORT, () => {
		console.log(`App is listening on port ${PORT}`);
	});