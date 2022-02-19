// Connect to DB
const { Client } = require('pg');

// change the DB_NAME string to whatever your group decides on
const DB_NAME = process.env.CI ? 'test-db' : 'desertfalconsdb';

const DB_URL =
  process.env.DATABASE_URL || `postgres://localhost:5432/${DB_NAME}`;

if (process.env.CI) {
  console.log('db url is: ', process.env.DATABASE_URL);
}

const client = new Client(DB_URL);

module.exports = client;
