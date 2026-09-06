import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'node:path'

export default defineConfig({
  root: process.cwd(), // This ensures it looks in the current directory
  build: {
    sourcemap: false,
    minify: true,
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: 'index.html', // Explicitly set entry point
      },
    },
  },
  plugins: [
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
