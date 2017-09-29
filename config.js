global.config = {
  build: {
    src: {
      html: [
        './src/views/**/*.pug',
        '!./src/views/**/_*.pug'
      ],
      css: './src/styles/main.scss',
      js: [
        './src/js/**/*.js',
        '!./src/js/**/_*.js'
      ],
      js_vendor: './src/vendor/**/*.js',
      js_order: [
        'jquery/**/*.js',
        '**/*.js'
      ],
      js_other: './src/js/**/_*.js',
      img: 'src/img/**/*.{png,jpg,gif}',
      fonts: 'src/fonts/**/*.{eot,ttf,svg,otf,woff}'
    },
    dest: {
      css: 'dist/css',
      html: 'dist/',
      js: 'dist/js',
      img: 'dist/img',
      fonts: 'dist/fonts',
      full: 'dist/**/*.*'
    }
  },
  watch: {
    css: 'src/{styles,vendor}/**/*.scss',
    html: 'src/views/**/*.pug',
    js: 'src/js/**/*.js',
    js_vendor: 'src/vendor/**/*.js',
    img: 'src/img/**/*.{png,jpg,gif}',
    fonts: 'src/fonts/**/*.{eot,ttf,svg,otf,woff}'
  },
  browsers: ['last 2 versions']
};

exports.config = config;