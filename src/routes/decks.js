const express = require('express');
const User = require('../repos/user-repo');
const Deck = require('../repos/deck-repo');
const MultichoiceQuestion = require('../repos/multichoice_question-repo');
const router = express.Router();

router.get('/decks', async (req, res) => {
	// Run sql query
	console.log('received request');
	const decks = await Deck.find();
	res.send(decks);
});

router.get('/decks/:id', async (req, res) => {
	const { id } = req.params;

	const deck = await Deck.findById(id);

	if (deck) {
		res.send(deck);
	} else {
		res.sendStatus(404);
	}
});

router.post('/decks', async (req, res) => {
	const { userID, name, questions } = req.body;
	const newDeck = await Deck.insert(req.body);
	let addedQuestions;
	if (questions) {
		addedQuestions = await Promise.all(
			questions.map(async (question) => {
				const addedQuestion = await MultichoiceQuestion.insert({
					...question,
					deckID: newDeck.id,
				});
				return addedQuestion;
			})
		);
	}
	res.send({ newDeck, addedQuestions });
});

router.put('/decks/:id', async (req, res) => {});

router.delete('/decks/all', async (req, res) => {
	const removedDecks = await Deck.deleteAll();
	res.send(removedDecks);
});
router.delete('/decks/:id', async (req, res) => {});

module.exports = router;
