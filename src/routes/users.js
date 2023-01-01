const express = require('express');
const User = require('../repos/user-repo');
const router = express.Router();

router.get('/users', async (req, res) => {
	// Run sql query
	console.log('received request');
	const users = await User.find();
	res.json(users);
});

router.get('/users/:id', async (req, res) => {
	const { id } = req.params;

	const user = await User.findById(id);

	if (user) {
		res.json(user);
	} else {
		res.jsonStatus(404);
	}
});

router.post('/users', async (req, res) => {
	try {
		const newUser = await User.insert(req.body).catch((err) => {
			console.error(err);
		});
		res.json(newUser);
	} catch (error) {
		console.err(error);
	}
});

router.post('/users/login', async (req, res) => {
	const { email, password } = req.body;
	try {
		const foundUser = await User.findByEmail({ email, password }).catch(
			(err) => {
				console.error(err);
			}
		);
		res.json(foundUser);
	} catch (error) {
		console.err(error);
	}
});

router.put('/users/:id', async (req, res) => {});

router.delete('/users/:id', async (req, res) => {});

module.exports = router;
