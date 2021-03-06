// https://github.com/michael-ciniawsky/postcss-load-config

module.exports = {
  "plugins": {
    autoprefixer: {},
    "postcss-aspect-ratio-mini": {},
    "postcss-write-svg": {
      utf8: false
    },
    "postcss-px-to-viewport": {
      viewportWidth: 1366,
      viewportHeight: 768,
      unitPrecision: 1,
      viewportUnit: 'vw',
      selectorBlackList: [".ignore", ".hairlines"],
      minPixelValue: 1,
      mediaQuery: false,
      exclude: [/node_modules/]
    },
    "postcss-viewport-units":{
      silence: true
    }
  }
}
