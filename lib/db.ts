// lib/db.ts
import knex, { Knex } from 'knex';
import config from '../knexfile';

// Define the shape of our global variable
declare global {
  var knexInstance: Knex | undefined;
}

const db = global.knexInstance || knex(config.development);

if (process.env.NODE_ENV !== 'production') {
  global.knexInstance = db;
}

export default db;
