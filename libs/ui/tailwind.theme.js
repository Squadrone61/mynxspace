const colors = require('tailwindcss/colors');
const plugin = require('tailwindcss/plugin');

module.exports = {
  darkMode: 'class',
  theme: {
    extend: {
      boxShadow: {
        dark:
          '0 1px 3px 0 rgba(255, 255, 255, 0.1), 0 1px 2px 0 rgba(255, 255, 255, 0.06)',
        dark_sm: '0 1px 2px 0 rgba(255, 255, 255, 0.05)',
        dark_md:
          '0 4px 6px -1px rgba(255, 255, 255, 0.1), 0 2px 4px -1px rgba(255, 255, 255, 0.06)',
      },
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
          light: colors.blue['300'],
          DEFAULT: colors.blue['500'],
          dark: colors.blue['800'],
        },
        secondary: {
          light: colors.indigo['300'],
          DEFAULT: colors.indigo['500'],
          dark: colors.indigo['800'],
        },
      },
    },
  },
  variants: {
    extend: {
      boxShadow: ['dark'],
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      const cardImage = {
        '.card-image': {
          margin: '0 -1rem 0 -1rem',
          width: 'calc(100% + 2rem)',
          'max-width': 'calc(100% + 2rem)',
        },
        '.card-image-top': {
          margin: '-1rem -1rem 0 -1rem',
          width: 'calc(100% + 2rem)',
          'max-width': 'calc(100% + 2rem)',
        },
        '.card-image-bottom': {
          margin: '0 -1rem -1rem -1rem',
          width: 'calc(100% + 2rem)',
          'max-width': 'calc(100% + 2rem)',
        },
      };
      addUtilities(cardImage, ['first', 'last']);
    }),
    plugin(function ({ addUtilities }) {
      const filterUtil = {
        '.filter-none': {
          filter: 'none',
        },
        '.filter-grayscale': {
          filter: 'grayscale(100%)',
        },
        '.filter-invert': {
          filter: 'invert(100%)',
        },
      };
      addUtilities(filterUtil, ['responsive', 'hover', 'dark']);
    }),
  ],
};
