const uiconfig = require('./libs/ui/tailwind.theme.js');
module.exports = {
  presets: [uiconfig],
  purge: {
    /*enabled: true,*/
    content: ['./apps/**/*.{html,ts}', './libs/**/*.{html,ts}'],
    /*    options: {
      keyframes: true,
    },*/
  },
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [],
};
