const path = require('path');

const autoprefixer = require('autoprefixer');
const webpack = require('webpack');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: {
    app: './src/app.jsx',
    vendor: [
      'react',
      'react-dom',
    ],
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
  },
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react'],
        },
      }, {
        test: /.css?$/,
        loader: ExtractTextPlugin.extract('style', 'css'),
      },
      {
        test: /\.(otf|eot|svg|ttf|woff2?)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'file',
        query: {
          name: 'assets/[name].[ext]',
        },
      },
    ],
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.bundle.js'),
    new HTMLWebpackPlugin({
      template: 'src/index.html',
      inject: 'body',
    }),
    new ExtractTextPlugin('style.css'),
  ],
  postcss: () => [autoprefixer({ browsers: ['last 2 version'] })],
};
