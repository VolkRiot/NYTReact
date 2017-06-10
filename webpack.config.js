module.exports = {
  entry: ['./src/client'],
  output: {
    filename: 'public/js/bundle.js',
    publicPath: 'http://localhost:3000/public/js/',
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
