import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// GitHub Pages serves project sites from /<repo-name>/, so the base path has to
// match whichever repo is being deployed to. Override with VITE_BASE when
// deploying somewhere other than the main repo, e.g.
//   VITE_BASE=/QOY-WEBSITE-TEST-V1/ npm run build
const base = process.env.VITE_BASE || '/qoy-website/'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base,
})
