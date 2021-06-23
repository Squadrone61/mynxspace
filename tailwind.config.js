const uiConfig = require('./libs/ui/tailwind.theme.js');

module.exports = {
  presets: [uiConfig],
  mode: process.env.TAILWIND_MODE ? 'jit' : '',
  purge: ['./apps/**/*.{html,ts}', './libs/**/*.{html,ts}'],
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [],
};
