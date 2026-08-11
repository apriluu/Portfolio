import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// GitHub Pages serves project sites at https://<user>.github.io/<repo>/
// so every asset path needs that repo name as a prefix. Change '/portfolio/'
// below if you name the GitHub repository something else.
export default defineConfig({
  base: '/portfolio/',
  plugins: [react(), tailwindcss()],
})
