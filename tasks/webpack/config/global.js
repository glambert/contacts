// Required modules
var path = require('path');
var gutil = require('gulp-util');
var webpack = require('webpack');

// Load tasks config
var config = require('../../config.json');

// Export configs
module.exports = {

  // Shared options
  entry: './' + config.webpack.entry,
  output: {
    path: path.join(__dirname, '../../../' + config.webpack.output),
    publicPath: '/' + config.webpack.publicPath,
    filename: config.webpack.filename
  },

  // Shared loaders
  loaders: [
    { test: /\.gif/, loader: 'url-loader?limit=10000&mimetype=image/gif' },
    { test: /\.jpg/, loader: 'url-loader?limit=10000&mimetype=image/jpg' },
    { test: /\.png/, loader: 'url-loader?limit=10000&mimetype=image/png' },
    { test: /\.svg/, loader: 'url-loader?limit=10000&mimetype=image/svg+xml' },
    { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: 'url-loader?limit=10000&minetype=application/font-woff' },
    { test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: 'file-loader' }
  ],

  // Shared css-loader (with [CSS Modules](https://github.com/css-modules/css-modules)) config
  cssModuleLoader: 'css-loader?modules&importLoaders=1&localIdentName=[local]-[hash:base64:5]',

  // Shared css-loader, without module
  cssLoader: 'css-loader',

  // Shared sass and autoprefixer loaders
  sassLoader: 'sass-loader?outputStyle=nested&precision=10' +
    '&includePaths[]=' + (path.resolve(__dirname, '../../../src/assets/css')) +
    '&includePaths[]=' + (path.resolve(__dirname, '../../../node_modules/susy/sass')) +
    '&includePaths[]=' + (path.resolve(__dirname, '../../../node_modules/modularscale-sass/stylesheets')) +
    '&includePaths[]=' + (path.resolve(__dirname, '../../../node_modules/breakpoint-sass/stylesheets')),
  autoprefixerLoader: 'autoprefixer-loader?' + '{browsers:' + JSON.stringify(config.autoprefixer.browsers) + '}',

  // Shared plugins
  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery'
    })
  ],

  // Resolve extensions
  extensions: [
    '',
    '.js',
    '.jsx'
  ],

  // Root
  root: path.resolve(__dirname, '../../../' + config.webpack.root),

  // Resolve alias to prevent duplicates
  alias: {
    jquery: 'jquery/dist/jquery',
    react: path.resolve('./node_modules/react'),
    'react-dom': path.resolve('./node_modules/react-dom')
  },

  // Shared moduleDirectories
  modulesDirectories: [
    'web_modules',
    'node_modules'
  ]

};
