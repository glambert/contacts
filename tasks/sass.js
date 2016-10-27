var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var sourcemaps = require('gulp-sourcemaps');
var filter = require('gulp-filter');
var browserSync = require('browser-sync');
var config = require('./config.json');

module.exports = function(shared) {
  return function() {
    return gulp.src(config.sass.src)
      .pipe(sourcemaps.init())
      .pipe(sass({
        outputStyle: 'nested',
        precision: 10,
        errLogToConsole: true,
        includePaths: [
          'node_modules/susy/sass',
          'node_modules/modularscale-sass/stylesheets',
          'node_modules/breakpoint-sass/stylesheets'
        ]
      }).on('error', sass.logError))
      .pipe(autoprefixer({
        browsers: config.autoprefixer.browsers
      }))
      .pipe(sourcemaps.write('./'))
      .pipe(gulp.dest(config.sass.dest))
      .pipe(filter('**/*.css'))
      .pipe(browserSync.reload({ stream: true }));
  };
};
