const pool = require('../pool');
const toCamelCase = require('./utils/toCamelCase');

class SimpleAnswerQuestion {
	static async find() {
		console.log('find function fired');
		const { rows } = await pool.query('SELECT * FROM deck_sessions');

		const parsedRows = toCamelCase(rows);

		return parsedRows;
	}

	static async findById(id) {
		const { rows } = await pool.query(
			'SELECT * FROM deck_sessions WHERE id = $1',
			[id]
		);

		return toCamelCase(rows)[0];
	}

	static async insert() {}

	static async delete(id) {
		const { rows } = await pool.query(
			`
				DELETE FROM session_multichoice_questions
				WHERE session_id = $1
				DELETE FROM deck_sessions
				WHERE id = $1 RETURNING
		`,
			[id]
		);
	}
}

module.exports = SimpleAnswerQuestion;
