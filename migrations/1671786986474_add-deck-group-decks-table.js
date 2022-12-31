/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = (pgm) => {
	pgm.sql(`
    CREATE TABLE deck_group_decks (
      id SERIAL PRIMARY KEY,
      user_id INTEGER NOT NULL REFERENCES users(id),
      deck_group_id INTEGER NOT NULL REFERENCES deck_groups(id),
      deck_id INTEGER NOT NULL REFERENCES decks(id)
    )
  `);
};

exports.down = (pgm) => {
	pgm.sql(`DROP TABLE IF EXISTS deck_group_decks;`);
};
