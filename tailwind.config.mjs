// tailwind.config.mjs
import colors from 'tailwindcss/colors';

/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ...colors,
        dark: '#212121',
        gold: '#ffcc00',
        'ai-red': '#e63946',
        'gis-green': '#2a9d8f',
        'light-bg': '#f8f9fa',
        white: '#ffffff',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;
