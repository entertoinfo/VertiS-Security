/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
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
        "active": "#2BA84A",
        "tile": "#040F0F",
      },
      backgroundImage: {
        'main': "url('../images/main-bg.png')",
        'title': "url('../images/title-bg.svg')",
        'radial-gradient': "url('../images/bg-gradient.svg')",
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      fontSize: {
        title: '2.625rem',
        mainTitle: '2rem',
      },
      padding: {
        '85px': '85px',
      },
      margin: {
        '0-auto': '0 auto',
      },
      screens: {
        'tablet': '480px',
    },
      width: {
        '540': '33.75rem',
        '738': '46.125rem',
      },
    },
  },
  plugins: [],
};
