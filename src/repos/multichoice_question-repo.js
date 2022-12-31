const pool = require('../pool');
const toCamelCase = require('./utils/toCamelCase');

class MultichoiceQuestion {
	static async find() {
		console.log('find function fired');
		const { rows } = await pool.query('SELECT * FROM multichoice_questions');

		const parsedRows = toCamelCase(rows);

		return parsedRows;
	}

	static async findById(id) {
		const { rows } = await pool.query(
			'SELECT * FROM multichoice_questions WHERE id = $1',
			[id]
		);

		return toCamelCase(rows)[0];
	}

	static async insert({
		answerDescription,
		questionText,
		choices,
		answer,
		deckID,
	}) {
		const { rows } = await pool.query(
			`
      INSERT INTO multichoice_questions (deck_id, choices, question_text, answer, answer_description)
      VALUES ($1, $2, $3, $4, $5) RETURNING *;
    `,
			[deckID, choices, questionText, answer, answerDescription]
		);
		return toCamelCase(rows)[0];
	}

	static async delete(id) {}
	static async deleteAll() {
		const { rows } = await pool.query(`
			DELETE FROM multichoice_questions;
		`);
		return rows;
	}
}

module.exports = MultichoiceQuestion;
