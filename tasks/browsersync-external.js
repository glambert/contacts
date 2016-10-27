var browserSync = require('browser-sync');
var gutil = require('gulp-util');
var config = require('./config.json');

module.exports = function(shared) {
  return function() {
    var startPath = config.browsersync.startPath || '';
    browserSync.init(config.browsersync.files, {
      open: false,
      startPath: startPath,
      notify: false,
      watchTask: true,
      timestamps: true,
      debugInfo: true,
      ghostMode: false,
      server: config.browsersync.server || false,
      https: shared.isHttps,
      proxy: {
        target: config.browsersync.proxy || undefined
      }
    });
  };
};
