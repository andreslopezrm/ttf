/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        "150": "150%"
      },
      colors: {
        "secundary": "#f8f9fa"
      },
    },
  },
  plugins: [],
}
