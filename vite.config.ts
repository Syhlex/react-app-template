/// <reference types="vitest" />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import sassDts from 'vite-plugin-sass-dts';
import path from 'node:path';

export default defineConfig({
  plugins: [react(), sassDts()],
  publicDir: 'public',
  build: {
    outDir: 'build',
    emptyOutDir: true,
  },
  server: {
    open: true,
  },
  css: {
    modules: {
      localsConvention: 'camelCaseOnly',
      generateScopedName: '[local]__[hash:base64:5]',
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./src/setupTests.ts'],
    css: {
      modules: {
        classNameStrategy: 'non-scoped',
      },
    },
  },
});
