import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Detect if we're deploying on GitHub Pages
const isGitHubPages = process.env.GITHUB_ACTIONS === 'true';

export default defineConfig({
  plugins: [react()],
  base: isGitHubPages ? '/Morya-webapp/' : '/',  // Dynamic base for GitHub Pages and Vercel
});
