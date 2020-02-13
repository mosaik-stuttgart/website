const mix = require('laravel-mix')
require('laravel-mix-purgecss')

mix
  .js('resources/js/freebird.js', 'js')
  .sass('resources/scss/tailwind.scss', 'css')
  .options({
    postCss: [
      require('tailwindcss')(),
      require('cssnano')({
        discardComments: {
            removeAll: true,
        },
      }),
    ],
    processCssUrls: false,
  })
  .purgeCss({
    enabled: true,
        globs: [
            path.join(__dirname, 'layouts/*.html'),
            path.join(__dirname, 'templates/*.html'),
            path.join(__dirname, 'templates/**/*.html'),
            path.join(__dirname, 'partials/*.html'),
            path.join(__dirname, 'partials/**/*.html'),
            path.join(__dirname, 'js/**.js'),
            path.join(__dirname, 'img/**.svg'),
        ],
        extensions: ['html', 'js', 'php', 'vue', 'svg'],
  })
  .browserSync({
    proxy: 'mosaik.test',
    files: ['./**/*', '../../content/**/*'],
  })
