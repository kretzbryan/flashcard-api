/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = (pgm) => {
	pgm.sql(`
    CREATE TABLE session_simple_answer_questions (
      id SERIAL PRIMARY KEY,
      deck_id INTEGER NOT NULL REFERENCES decks(id),
      session_id INTEGER NOT NULL REFERENCES deck_sessions(id),
      simple_answer_question_id INTEGER NOT NULL REFERENCES simple_answer_questions(id),
      answered_correctly BOOLEAN,
      created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
      updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
    );
  `);
};

exports.down = (pgm) => {
	pgm.sql(`
    CREATE TABLE session_simple_answer_questions;
  `);
};
