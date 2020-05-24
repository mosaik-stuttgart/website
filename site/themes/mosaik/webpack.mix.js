const mix = require('laravel-mix')
require('laravel-mix-purgecss')

mix
  .setPublicPath('./')
  .js('resources/js/*', 'js/bundle.js')
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
          '../../content/**/*',
            path.join(__dirname, 'layouts/*.html'),
            path.join(__dirname, 'templates/*.html'),
            path.join(__dirname, 'templates/**/*.html'),
            path.join(__dirname, 'partials/*.html'),
            path.join(__dirname, 'partials/**/*.html'),
            path.join(__dirname, 'js/**.js'),
            path.join(__dirname, 'img/**.svg'),
        ],
        whitelist: ['strong'],
        extensions: ['html', 'js', 'php', 'yaml', 'svg', 'md'],
  })
  .version()
  .browserSync({
    proxy: 'mosaik.test',
    files: ['./**/*', '../../content/**/*'],
  })
