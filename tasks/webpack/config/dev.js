var path = require('path');
var webpack = require('webpack');

// Load global webpack configs
var webpackConfig = require('./global');

module.exports = {
  debug: true,
  devtool: 'cheap-module-eval-source-map',
  entry: [
    'webpack-hot-middleware/client?reload=true',
    webpackConfig.entry
  ],
  output: {
    path: webpackConfig.output.path,
    publicPath: webpackConfig.output.publicPath,
    filename: webpackConfig.output.filename
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ].concat(
    webpackConfig.plugins
  ),
  resolve: {
    root: webpackConfig.root,
    extensions: webpackConfig.extensions,
    alias: webpackConfig.alias,
    modulesDirectories: webpackConfig.modulesDirectories
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel',
        exclude: /node_modules/,
        query: {
          cacheDirectory: true,
          presets: ['react', 'es2015', 'stage-0'],
          plugins: [
            'transform-runtime',
            ['react-transform', {
              'transforms': [{
                'transform': 'react-transform-hmr',
                'imports': ['react'],
                'locals': ['module']
              }]
            }]
          ]
        }
      },
      {
        test: /\.css$/,
        exclude: /cssmodules/,
        loader: 'style-loader'+
          '!'+webpackConfig.cssLoader+
          '!'+webpackConfig.autoprefixerLoader
      },
      {
        test: /\.scss$/,
        exclude: /cssmodules/,
        loader: 'style-loader'+
          '!'+webpackConfig.cssLoader+
          '!'+webpackConfig.autoprefixerLoader+
          '!'+webpackConfig.sassLoader
      },
      {
        test: /cssmodules\/(.*)\.(s?css)$/,
        loader: 'style-loader'+
          '!'+webpackConfig.cssModuleLoader+
          '!'+webpackConfig.autoprefixerLoader+
          '!'+webpackConfig.sassLoader
      }
    ].concat(
      webpackConfig.loaders
    )
  }
};
