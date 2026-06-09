import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// base = '/dhriti/' for GitHub Pages project site (devanshc777.github.io/dhriti).
// Override with VITE_BASE='/' for Vercel / root hosting.
export default defineConfig({
  base: process.env.VITE_BASE ?? '/dhriti/',
  plugins: [react(), tailwindcss()],
})
