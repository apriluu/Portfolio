import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// GitHub Pages serves project sites at https://<user>.github.io/<repo>/
// so every asset path needs that repo name as a prefix, matching its exact
// case. This repo is named "Portfolio" (capital P).
export default defineConfig({
  base: '/Portfolio/',
  plugins: [react(), tailwindcss()],
})
