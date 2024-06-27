// vite.config.js

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path'; // Import path module
import postcssConfig from './postcss.config.js';
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  css: {
    postcss: postcssConfig,
  },
});
