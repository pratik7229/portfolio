// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';
import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  // 1. REPLACE this with your full GitHub Pages URL
  site: 'https://pratik7229.github.io',

  // 2. CRITICAL: If your repo name is 'my-portfolio', this must be '/my-portfolio'
  // If your repo name is EXACTLY 'pratik7229.github.io', you can remove this line or set it to '/'
  base: '/portfolio', 

  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [react(), mdx()]
});