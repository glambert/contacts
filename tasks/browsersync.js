var browserSync = require('browser-sync');
var gutil = require('gulp-util');
var config = require('./config.json');

// Browsersync - Webpack + React Transform HMR
// https://github.com/BrowserSync/recipes/tree/master/recipes/webpack.react-transform-hmr
var webpack = require('webpack');
var webpackDevMiddleware = require('webpack-dev-middleware');
var webpackHotMiddleware = require('webpack-hot-middleware');
var webpackConfig = require('./webpack/config/dev.js');
var bundler = webpack(webpackConfig);

module.exports = function(shared) {
  return function() {
    var startPath = config.browsersync.startPath || '';
    browserSync.init({
      files: config.browsersync.files,
      open: false,
      startPath: startPath,
      notify: false,
      ghostMode: false,
      https: shared.isHttps,
      server: {
        baseDir: config.browsersync.baseDir,
        middleware: [
          // Webpack dev server middleware
          webpackDevMiddleware(bundler, {
            noInfo: true,
            publicPath: webpackConfig.output.publicPath,
            stats: { colors: true }
          }),
          // Bundler should be the same as above
          webpackHotMiddleware(bundler),
          // Pass isWebpackDev and browsersync IP (bsIp) as parameters in all requests
          function (req, res, next) {
            var sep = req.url.indexOf('?') > -1 ? '&' : '?';
            // Only append if not present already
            if (req.url.indexOf('isWebpackDev') === -1) {
              req.url = req.url + sep + 'isWebpackDev';
            }
            // gutil.log('[browsersync middleware]', req.url);
            next();
          }
        ]
      }
    });
  };
};
