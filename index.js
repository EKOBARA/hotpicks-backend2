const express = require('express');
const cors = require('cors');
const app = express();

app.set('port', process.env.PORT || 7000);

// MIDDLEWARE
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

// Redirect
app.get('/', (req, res) => {
	res.redirect('/api/stocks');
});

// Controllers
const stocksController = require('./controllers/stocksController');
app.use('/api/stocks', stocksController);

const usersController = require('./controllers/usersController');
app.use('/api', usersController);

// Start Server
app.listen(app.get('port'), () => {
	console.log('✅ Listening on port 7000 🚀');
});