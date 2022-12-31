const express = require('express');
const usersRouter = require('./routes/users');
const decksRouter = require('./routes/decks');
const multichoiceQuestionRouter = require('./routes/multichoice-questions');

module.exports = () => {
	const app = express();

	app.use(express.json());
	app.use(usersRouter);
	app.use(decksRouter);
	app.use(multichoiceQuestionRouter);

	return app;
};
