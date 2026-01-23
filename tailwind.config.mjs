/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        serif: ['IBM Plex Serif', 'ui-serif', 'Georgia', 'serif'],
        mono: ['IBM Plex Mono', 'ui-monospace', 'monospace'],
      },
    },
  },
  plugins: [],
};
