const webpack = require('webpack');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    app: './src/app.jsx',
    vendor: [
      'react',
      'react-dom',
    ],
  },
  output: {
    path: `${__dirname}/build`,
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
      },
    ],
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.bundle.js'),
    new HTMLWebpackPlugin({
      template: 'src/index.html',
      inject: 'body',
    }),
  ],
};
