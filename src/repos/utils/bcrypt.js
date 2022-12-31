const bcrypt = require('bcrypt');

const saltRounds = 10;
// let generatedHash = bcrypt.genSalt(saltRounds, function (err, salt) {
// 	bcrypt.hash(password, salt, function (err, hash) {
// 		console.log(hash);
// 	});
// });

// console.log('generatedHash', generatedHash);

// bcrypt.compare(password, generatedHash, function (err, result) {
// 	console.log('result', result);
// });

class Bcrypt {
	static async hashPassword(password) {
		const hash = await bcrypt.hash(password, saltRounds);
		console.log('hash', hash);
		return hash;
	}

	static async checkPassword(password, hash) {
		const pass = await bcrypt.compare(password, hash);
		console.log('pass', pass);
		return pass;
	}
}

module.exports = Bcrypt;
