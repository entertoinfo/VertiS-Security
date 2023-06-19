/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      fontFamily: {
        Circe: ['"Circe"'],
      },
      transitionDuration: {
        50: "50ms",
      },
      container: {
        center: true,
      },
      colors: {
        "green-basic": "#2BA84A",
      },
    },
  },
  plugins: [],
};
