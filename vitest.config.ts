import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    alias: {
      '@': path.resolve(process.cwd(), '.'),
      'server-only': path.resolve(__dirname, './__tests__/mocks/server-only.ts'),
    },
    coverage: {
      provider: 'v8',
      reporter: ['text', 'lcov'], // 'lcov' is critical for Coveralls
    },
  },
});
