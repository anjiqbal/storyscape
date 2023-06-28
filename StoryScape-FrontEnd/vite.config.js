/** @type {import('vite').UserConfig} */

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist'
  },
  test: {
    globals: true,
    environent:'jsdom',
    setupFiles: './tests/setup.js',
}})
