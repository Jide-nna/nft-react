/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    colors: {
      'main': '#120A14;',
      'white': '#FFF',
      'black': 'hsl(0, 0%, 0%, 1)',
      'try': 'linear-gradient(273deg, #FF4060 0%, #FF81C5 52.08%, #6D5EEA 100%)',
      'brands': '#FF4262',
      'pink1': '#FF4060',
      'pink2': '#FF4262;',
      'card': '#575757;',
      'wong': '#CDFE02;',
      'new': 'rgba(0, 0, 0, 0.10);',
      'discord': '#5765F2',
      'twitter': '#36B9FF'
    },
  },
  plugins: [],
}


