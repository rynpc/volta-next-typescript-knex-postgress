import 'server-only';
import knex, { Knex } from 'knex';
import config from '../knexfile';

declare global {
  var knexInstance: Knex | undefined;
}

const environment = process.env.NODE_ENV || 'development';
const db = global.knexInstance || knex(config[environment]);

if (process.env.NODE_ENV !== 'production') {
  global.knexInstance = db;
}

export default db;
