const colors = require('tailwindcss/colors');

module.exports = {
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        back: {
          light: colors.white,
          DEFAULT: colors.white,
          dark: colors.gray['900'],
        },
        text: {
          light: colors.gray['900'],
          DEFAULT: colors.black,
          dark: colors.gray['50'],
        },
        primary: {
          light: colors.blue['400'],
          DEFAULT: colors.blue['500'],
          dark: colors.blue['600'],
        },
        secondary: {
          light: colors.indigo['400'],
          DEFAULT: colors.indigo['500'],
          dark: colors.indigo['600'],
        },
      },
    },
  },
  variants: {},
  plugins: [],
};
