/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = (pgm) => {
	pgm.sql(`
    CREATE TABLE session_boolean_questions (
      id SERIAL PRIMARY KEY,
      deck_id INTEGER NOT NULL REFERENCES decks(id),
      session_id INTEGER NOT NULL REFERENCES deck_sessions(id),
      boolean_question_id INTEGER NOT NULL REFERENCES boolean_questions(id),
      answered_correctly BOOLEAN,
      created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
      updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    );
  `);
};

exports.down = (pgm) => {
	pgm.sql(`
    CREATE TABLE session_boolean_questions;
  `);
};
