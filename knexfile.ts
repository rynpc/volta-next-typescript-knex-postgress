import type { Knex } from "knex";

const config: { [key: string]: Knex.Config } = {
  development: {
    client: "pg",
    connection: {
      host: "localhost",
      port: 5432,
      user: "postgres",
      password: "password",
      database: "my_next_db",
    },
    migrations: {
      extension: "ts",
      directory: "./migrations",
    },
  },

  staging: {
    client: "pg",
    connection: process.env.STAGING_DATABASE_URL || {
      host: process.env.STAGING_DB_HOST,
      user: process.env.STAGING_DB_USER,
      password: process.env.STAGING_DB_PASSWORD,
      database: process.env.STAGING_DB_NAME,
      ssl: { rejectUnauthorized: false }, // Required by many cloud hosts
    },
    pool: { min: 2, max: 10 },
    migrations: {
      extension: "ts",
      directory: "./migrations",
    },
  },

  production: {
    client: "pg",
    connection: {
      // Best practice: use a single connection string for production
      connectionString: process.env.DATABASE_URL,
      ssl: { rejectUnauthorized: false },
    },
    pool: { min: 2, max: 10 }, // Pooling handles multiple concurrent users
    migrations: {
      extension: "ts",
      directory: "./migrations",
      tableName: "knex_migrations",
    },
  },
};

export default config;
