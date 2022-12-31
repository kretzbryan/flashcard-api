/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = (pgm) => {
	pgm.sql(`
    CREATE TABLE multichoice_questions (
      id SERIAL PRIMARY KEY,
      deck_id INTEGER NOT NULL REFERENCES decks(id),
      choices text[],
      question_text VARCHAR(500) NOT NULL,
      answer VARCHAR(240) NOT NULL,
      associated_image VARCHAR(240),
      answer_description VARCHAR(700),
      created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
      updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
    );
  `);
};

exports.down = (pgm) => {
	pgm.sql(`
    DROP TABLE IF EXISTS multichoice_questions;
  `);
};
