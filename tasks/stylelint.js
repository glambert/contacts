var gulp = require('gulp');
var gulpStylelint = require('gulp-stylelint');
var config = require('./config.json');

module.exports = function(shared) {
  return function() {
    return gulp.src(config.stylelint.src)
      .pipe(gulpStylelint({
        failAfterError: true,
        ignorePath: 'node_modules/**/*',
        syntax: 'scss',
        reporters: [{
          formatter: 'string',
          console: true
        }]
      }));
  };
};
