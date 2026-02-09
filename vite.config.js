import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/', // GitHub Pages: https://<username>.github.io/axe-f-capital
  plugins: [react()],
})
