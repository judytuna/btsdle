const colors = require('tailwindcss/colors')

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      green: colors.purple,
      yellow: colors.orange,
      white: colors.white,
      black: colors.black,
      slate: colors.slate,
      orange: colors.orange,
      cyan: colors.cyan,
      blue: colors.purple,
      gray: colors.purple,
      indigo: colors.indigo,
    },
    extend: {},
  },
  plugins: [],
}
