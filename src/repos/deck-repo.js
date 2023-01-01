const pool = require('../pool');
const toCamelCase = require('./utils/toCamelCase');

class Deck {
	static async find() {
		console.log('find function fired');
		const { rows } = await pool.query('SELECT * FROM decks');

		const parsedRows = toCamelCase(rows);

		return parsedRows;
	}

	static async findById(id) {
		const { rows } = await pool.query(
			`
			SELECT  *, 'multichoice' AS type
			FROM multichoice_questions 
			WHERE multichoice_questions.deck_id = $1;
		`,
			[id]
		);

		return toCamelCase(rows);
	}

	static async insert({ userID, name }) {
		const newDate = new Date();
		newDate.setDate(newDate.getDate() + 7);
		const { rows } = await pool.query(
			`INSERT INTO decks (user_id,name, active_end)
    	 VALUES ($1,$2, $3)
			 RETURNING *
			`,
			[userID, name, newDate]
		);
		return rows[0];
	}

	static async delete(id) {}

	static async delete(id) {}
	static async deleteAll() {
		const { rows } = await pool.query(`
			DELETE FROM decks RETURNING *;
		`);
		return rows;
	}
}

module.exports = Deck;
