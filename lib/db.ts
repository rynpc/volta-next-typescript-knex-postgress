import knex, { Knex } from 'knex';
import config from '../knexfile';

declare global {
  var knexInstance: Knex | undefined;
}

const environment = process.env.NODE_ENV || 'development';
const dbConfig = config[environment] || config.development;
const db = global.knexInstance || knex(dbConfig);

if (process.env.NODE_ENV !== 'production') {
  global.knexInstance = db;
}

export default db;
