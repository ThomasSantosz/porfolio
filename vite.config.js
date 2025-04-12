// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/porfolio/', // <-- nome do repositório no GitHub
  plugins: [react()],
})
