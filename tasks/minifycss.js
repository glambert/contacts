var gulp = require('gulp');
var del = require('del');
var csso = require('gulp-csso');
var rename = require('gulp-rename');
var filter = require('gulp-filter');
var config = require('./config.json');
var gutil = require('gulp-util');

module.exports = function(shared) {
  return function () {
    return gulp.src(config.minifycss.src)
      .pipe(csso({
        restructure: false
      }))
      .pipe(rename({
        suffix: '.min'
      }))
      .pipe(gulp.dest(config.minifycss.dest));
  };
};
