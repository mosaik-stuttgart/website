const mix = require('laravel-mix')
require('laravel-mix-purgecss')

mix
  .js('resources/js/freebird.js', 'js')
  .sass('resources/scss/tailwind.scss', 'css')
  .options({
    postCss: [require('tailwindcss')()],
    processCssUrls: false,
  })
  .purgeCss()
  .browserSync({
    proxy: 'mosaik.test',
    files: ['./**/*', '../../content/**/*'],
  })
