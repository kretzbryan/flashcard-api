const express = require('express');
const usersRouter = require('./routes/users');
const decksRouter = require('./routes/decks');
const multichoiceQuestionRouter = require('./routes/multichoice-questions');
const cors = require('cors');

module.exports = () => {
	const app = express();

	app.use(cors());
	app.use(express.json());
	app.use(usersRouter);
	app.use(decksRouter);
	app.use(multichoiceQuestionRouter);

	return app;
};
