const express = require('express');
const User = require('../repos/user-repo');
const Deck = require('../repos/deck-repo');
const MultichoiceQuestion = require('../repos/multichoice_question-repo');
const BooleanQuestion = require('../repos/boolean_question-repo');
const SimpleAnswerQuestion = require('../repos/simple_answer_question-repo');
const ChronologicalQuestion = require('../repos/chronological_question-repo');
const router = express.Router();

const QuestionTypeRepos = {
	multichoice: MultichoiceQuestion,
	boolean: BooleanQuestion,
	'simple-answer': SimpleAnswerQuestion,
	chronological: ChronologicalQuestion,
};

router.get('/decks', async (req, res) => {
	// Run sql query
	console.log('received request');
	const decks = await Deck.find();
	res.json(decks);
});

router.get('/decks/:id', async (req, res) => {
	const { id } = req.params;

	const deck = await Deck.findById(id);

	if (deck) {
		res.json(deck);
	} else {
		res.jsonStatus(404);
	}
});

router.post('/decks', async (req, res) => {
	const { userID, name, questions } = req.body;
	const newDeck = await Deck.insert(req.body);
	let addedQuestions;
	if (questions) {
		addedQuestions = await Promise.all(
			questions.map(async (question) => {
				const { type } = question;
				const QuestionRepo = QuestionTypeRepos[type];
				const addedQuestion = await QuestionRepo.insert({
					...question,
					deckID: newDeck.id,
				});
				return addedQuestion;
			})
		);
	}
	res.json({ newDeck, addedQuestions });
});

router.put('/decks/:id', async (req, res) => {});

router.delete('/decks/all', async (req, res) => {
	const removedDecks = await Deck.deleteAll();
	res.json(removedDecks);
});
router.delete('/decks/:id', async (req, res) => {});

module.exports = router;
