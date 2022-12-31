/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = (pgm) => {
	pgm.sql(`
    ALTER TABLE users
    ALTER COLUMN password SET DATA TYPE VARCHAR(250);
  `);
};

exports.down = (pgm) => {
	pgm.sql(`
  ALTER TABLE users
  ALTER COLUMN password SET DATA TYPE VARCHAR(50);
`);
};
