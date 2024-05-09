import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      { find: '@', replacement: `${path.resolve(process.cwd())}/src` },
    ],
  },
  server: {
    open: true,
    proxy: {
      '/api/v1': {
        target: 'https://maxa-d.chanjui.com',
        changeOrigin: true,
        // https://maxa-d.chanjui.com/api/v1/login
        // mapping -> /api/v1
        // -> /backend/api.php
      },
    },
  },
})
