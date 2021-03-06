module.exports = function (config) {
  /* Markdown */
  let markdownIt = require('markdown-it')
  let markdownItAttrs = require('markdown-it-attrs')
  let options = { html: true }
  config.setLibrary('md', markdownIt(options).use(markdownItAttrs))

  /* Styles */
  config.addWatchTarget('./src/css')

  /* Scripts */
  config.addWatchTarget('./src/js')

  /* Images */
  config.addPassthroughCopy('./src/img')
  config.addWatchTarget('./src/img')

  /* Fonts */
  config.addPassthroughCopy('./src/fonts')
  config.addWatchTarget('./src/fonts')

  config.addPassthroughCopy('./src/favicon.ico')

  return {
    dir: {
      input: 'src',
      output: 'dist',
      includes: 'includes',
      layouts: 'layouts',
    },
  }
}
