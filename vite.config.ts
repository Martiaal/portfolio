import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/portfolio/', // <--- essentiel pour GitHub Pages
  plugins: [react()],
})
