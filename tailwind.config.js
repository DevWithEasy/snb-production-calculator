/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily : {
        default : ['Parkinsans', 'sans-serif'],
        bangla : ['mainak_signature','sans-serif']
      }
    },
  },
  plugins: [],
}