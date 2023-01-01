const express = require('express');
const User = require('../repos/user-repo');
const Deck = require('../repos/deck-repo');
const MultichoiceQuestion = require('../repos/multichoice_question-repo');
const router = express.Router();

router.get('/multichoice-questions/all', async (req, res) => {
	// Run sql query
	const questions = await MultichoiceQuestion.find();
	res.json(questions);
});

router.delete('/multichoice-questions/all', async (req, res) => {
	// Run sql query
	const questions = await MultichoiceQuestion.deleteAll();
	res.json(questions);
});

module.exports = router;
