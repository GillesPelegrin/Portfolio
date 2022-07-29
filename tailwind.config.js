/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#F5A154',
        'secundary': '#54A8F5',
        'color-title': '#3E3C3C',
        'color-text': '#7B7B7B'
      },
      fontFamily: {
        sans: [
          'League Spartan',
          ...defaultTheme.fontFamily.sans,
        ],
        serif: [
          'Libre Baskerville',
          ...defaultTheme.fontFamily.serif,
        ]
      }
    },
  },
  plugins: [],
}
