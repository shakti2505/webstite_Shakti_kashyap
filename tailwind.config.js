/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
       fontFamily: {
      montserrat: ['"Montserrat"', 'sans-serif'],
      Playfair: ['"Playfair"', 'serif'],
    },
    },
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        '.font-playfair-roman': {
          fontFamily: '"Playfair", serif',
          fontStyle: 'normal',  // For Roman style
        },
        '.font-playfair-italic': {
          fontFamily: '"Playfair", serif',
          fontStyle: 'italic',  // For Italic style
        },
      });
    },
  ],}