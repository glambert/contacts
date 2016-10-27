var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

// Load global webpack configs
var webpackConfig = require('./global');

module.exports = {
  entry: webpackConfig.entry,
  output: {
    path: webpackConfig.output.path,
    filename: webpackConfig.output.filename
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel',
        exclude: /node_modules/,
        query: {
          presets: ['react', 'es2015', 'stage-0'],
          plugins: ['transform-runtime']
        }
      },
      {
        test: /\.css$/,
        exclude: /cssmodules/,
        loader: ExtractTextPlugin.extract(
          'style-loader',
          webpackConfig.cssLoader+'!'+webpackConfig.autoprefixerLoader
        )
      },
      {
        test: /\.scss$/,
        exclude: /cssmodules/,
        loader: ExtractTextPlugin.extract(
          'style-loader',
          webpackConfig.cssLoader+'!'+webpackConfig.autoprefixerLoader+'!'+webpackConfig.sassLoader
        )
      },
      {
        test: /cssmodules\/(.*)\.(s?css)$/,
        loader: ExtractTextPlugin.extract(
          'style-loader',
          webpackConfig.cssModuleLoader+'!'+webpackConfig.autoprefixerLoader+'!'+webpackConfig.sassLoader
        )
      }
    ].concat(
      webpackConfig.loaders
    )
  },
  resolve: {
    root: webpackConfig.root,
    extensions: webpackConfig.extensions,
    alias: webpackConfig.alias,
    modulesDirectories: webpackConfig.modulesDirectories
  },
  plugins: webpackConfig.plugins.concat([
    new ExtractTextPlugin('toolkit.css', { allChunks: true }),
    new webpack.PrefetchPlugin('react'),
    new webpack.PrefetchPlugin('react/lib/ReactComponentBrowserEnvironment'),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: { warnings: false }
    }),
    new webpack.optimize.DedupePlugin()
  ])
};
