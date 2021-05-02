const uiConfig = require('./libs/ui/tailwind.theme.js');

module.exports = {
  presets: [uiConfig],
  mode: 'jit',
  purge: ['./apps/**/*.{html,ts}', './libs/**/*.{html,ts}'],
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [],
};
