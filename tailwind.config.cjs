/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.tsx'],
  theme: {
    colors: {
      'blue-600': '#0F52BA',
      'blue-700': '#0F52BA',
      white: '#ffffff',
      black: '#000000',
      'zinc-700': '#373737',
      'zinc-800': '#2C2C2C',
    },
    extend: {
      fontFamily: {
        sans: 'Montserrat , sans-serif',
      },
    },
  },
  plugins: [],
};
