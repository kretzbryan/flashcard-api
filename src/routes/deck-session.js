const express = require('express');
const User = require('../repos/user-repo');
const Deck = require('../repos/deck-repo');
const MultichoiceQuestion = require('../repos/multichoice_question-repo');
const DeckSession = require('../repos/deck_session-repo');
const router = express.Router();

router.get('/deck-sessions', async (req, res) => {
	// Run sql query
	console.log('received request');
	const decks = await DeckSession.find();
	res.send(decks);
});

module.exports = router;
