# Next.js + Knex + Postgres + Vitest

A full-stack TypeScript application managed with Volta.

## Tech Stack
- **Framework:** Next.js (App Router)
- **Database:** PostgreSQL with Knex.js
- **Tooling:** Volta (Node/NPM pinning)
- **Testing:** Vitest & Coveralls
- **Environment:** Docker Compose

## Getting Started

1. **Start Database:**
   ```bash
   docker-compose up -d
   ```
2. **Run Migrations:**
   ```bash
   npm run db:migrate
   ```
3. **Run App:**
   ```bash
   npm run dev
   ```

## Testing
```bash
npm test          # Run tests
npm run coverage  # Run coverage for Coveralls
```
