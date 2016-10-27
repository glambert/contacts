var gulp = require('gulp');
var webpack = require('webpack');
var gulpWebpack = require('webpack-stream');
var webpackConfigProd = require('./config/production');
var gutil = require('gulp-util');

// Load tasks config
var config = require('../config.json');

module.exports = function(shared) {
  return function() {
    return gulp
      .src(config.webpack.entry)
      .pipe(gulpWebpack(webpackConfigProd, webpack, function (err, stats) {
        if (err) {
          throw new gutil.PluginError('[webpack]', err);
        }
        gutil.log('[webpack]', stats.toString({
          colors: true
        }));
      }))
      .pipe(gulp.dest(config.webpack.output));
  };
};
