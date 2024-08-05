/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontFamily:{
        playfair: "'playfair display', serif",
        lato: " 'lato', sans-serif",
      }
    },
  },
  plugins: [],
}