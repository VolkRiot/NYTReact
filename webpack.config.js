/* eslint-disable no-var */
var path = require('path');

module.exports = {
  entry: ['./src/client/app.jsx'],
  output: {
    filename: 'js/bundle.js',
    path: path.resolve(__dirname, 'public'),
    publicPath: 'http://localhost:3000/public/',
  },
  module: {
    rules: [{ test: /\.(js|jsx)$/, use: 'babel-loader', exclude: /node_modules/ }],
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  devServer: {
    port: 3000,
  },
};
