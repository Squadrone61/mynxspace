const uiconfig = require('./libs/ui/tailwind.theme.js');
module.exports = {
  presets: [uiconfig],
  purge: {
    content: ['./apps/**/*.{html,ts}', './libs/**/*.{html,ts}'],
  },
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [],
};
