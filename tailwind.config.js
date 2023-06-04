/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      fontFamily: {
        'Circe': ['"Circe"'],
    },
    transitionDuration: {
      '50': '50ms',
    }
    },
  },
  plugins: [],
}