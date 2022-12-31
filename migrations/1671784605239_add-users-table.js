/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = (pgm) => {
	pgm.sql(`
    CREATE TABLE users (
      id SERIAL PRIMARY KEY,
      created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
      updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
      image_url VARCHAR(240),
      email VARCHAR(240) UNIQUE NOT NULL,
      password VARCHAR(50) NOT NULL,
      status VARCHAR(15)
    );
  `);
};

exports.down = (pgm) => {
	pgm.sql(`
  DROP TABLE IF EXISTS users;
  `);
};
