var gulp = require('gulp');
var path = require('path');
var gutil = require('gulp-util');
var rev = require('gulp-rev');
var revDel = require('rev-del');
var override = require('gulp-rev-css-url');
var config = require('./config.json');

var ASSETS_SRC = path.join(__dirname, '../public/assets');
var ASSETS_BUILD = path.join(__dirname, '../public/assets/build');

module.exports = function(shared) {
  return function() {
    return gulp.src([
      ASSETS_SRC + '/css/**/*.css',
      ASSETS_SRC + '/img/**/*.*',
      ASSETS_SRC + '/js/**.*'
    ], {
      base: ASSETS_SRC
    })
    .pipe(rev())
    .pipe(override())
    .pipe(gulp.dest(ASSETS_BUILD))
    .pipe(rev.manifest())
    .pipe(revDel({ dest: ASSETS_BUILD }))
    .pipe(gulp.dest(ASSETS_BUILD));
  };
};
