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
        "gradient-radial": "rgba(23, 98, 41, 0.3)",
        
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
        footer: '',
      },
      padding: {
        '85px': '85px',
        
      },
      margin: {
        '0-auto': '0 auto',
      },
      width: {
        '540': '33.75rem',
      },
    },
  },
  plugins: [],
};
