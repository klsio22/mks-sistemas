/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.tsx', './index.html'],
  theme: {
    fontSize: {
      '3xs': 10,
      '2xs': 12,
      xs: 13,
      sm: 14,
      md: 15,
      '2md': 16,
      lg: 18,
      xl: 20,
      '2xl': 27,
      '3xl': 28,
    },
    colors: {
      'gray-200': '#EEEEEE',
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
