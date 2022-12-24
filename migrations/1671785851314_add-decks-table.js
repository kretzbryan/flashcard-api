/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = (pgm) => {
	pgm.sql(`
    CREATE TABLE decks (
      id SERIAL PRIMARY KEY,
      user_id INTEGER NOT NULL REFERENCES users(id),
      subject_id INTEGER NOT NULL REFERENCES users(id),
      public BOOLEAN,
      created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
      updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
      active_start TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
      active_end TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
      caption VARCHAR(240)
    );
  `);
};

exports.down = (pgm) => {
	pgm.sql(`DROP TABLE decks`);
};
