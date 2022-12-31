/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = (pgm) => {
	pgm.sql(`
    CREATE TABLE decks (
      id SERIAL PRIMARY KEY,
      name VARCHAR(240) NOT NULL,
      user_id INTEGER NOT NULL REFERENCES users(id),
      subject_id INTEGER REFERENCES subjects(id),
      public BOOLEAN DEFAULT false,
      created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
      updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
      active_start TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
      active_end TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
      caption VARCHAR(240)
    );
  `);
};

exports.down = (pgm) => {
	pgm.sql(`DROP TABLE IF EXISTS decks;`);
};
