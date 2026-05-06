// __tests__/db.test.ts
import { describe, it, expect, afterAll } from 'vitest';
import db from "../lib/db";

describe('Database Connection', () => {
  // Check if we can reach the users table we just migrated
  it('should be able to query the users table', async () => {
    const users = await db('users').select('*');
    expect(Array.isArray(users)).toBe(true);
  });

  it('should insert a test user', async () => {
    const testEmail = `test-${Date.now()}@example.com`;
    
    await db('users').insert({
      name: 'Test Bot',
      email: testEmail
    });

    const user = await db('users').where({ email: testEmail }).first();
    expect(user).toBeDefined();
    expect(user.name).toBe('Test Bot');
  });

  // Clean up connection after tests
  afterAll(async () => {
    await db.destroy();
  });
});
