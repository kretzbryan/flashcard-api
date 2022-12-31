const { request } = require('express');
const pool = require('../pool');
const Bcrypt = require('./utils/bcrypt');
const toCamelCase = require('./utils/toCamelCase');
// const bcrypt = require('bcrypt');

// const saltRounds = 10;

class User {
	static async find() {
		console.log('find function fired');
		const { rows } = await pool.query('SELECT * FROM users');

		const parsedRows = toCamelCase(rows);

		return parsedRows;
	}

	static async findById(id) {
		const { rows } = await pool.query('SELECT * FROM users WHERE id = $1', [
			id,
		]);

		return toCamelCase(rows)[0];
	}

	static async findByEmail({ email, password }) {
		const { rows } = await pool.query('SELECT * FROM users WHERE email = $1', [
			email,
		]);

		const isMatchedPassword = Bcrypt.checkPassword(password, rows[0].password);

		return isMatchedPassword ? toCamelCase(rows)[0] : null;
	}

	static async insert({ email, password, status }) {
		password = await Bcrypt.hashPassword(password);
		const { rows } = await pool.query(
			'INSERT INTO users (email, password, status) VALUES ($1, $2, $3);',
			[email, password, status]
		);

		return toCamelCase(rows)[0];
	}

	static async delete(id) {}
}

module.exports = User;
