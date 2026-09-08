/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        charcoal: '#0B0B0D',
        nearblack: '#141416',
        offwhite: '#F5F5F0',
        gold: '#C9A227',
        'gold-light': '#E4B83A',
        'gold-dark': '#A8841F',
      },
      fontFamily: {
        playfair: ['"Playfair Display"', 'serif'],
        inter: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
