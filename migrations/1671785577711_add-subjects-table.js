/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = (pgm) => {
	pgm.sql(`
  CREATE TABLE subjects (
    id SERIAL PRIMARY KEY,
    contents VARCHAR(240) UNIQUE
  );
  `);
};

exports.down = (pgm) => {
	pgm.sql(`DROP TABLE IF EXISTS subjects;`);
};
