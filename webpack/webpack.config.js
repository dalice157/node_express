const nodeExternals = require('webpack-node-externals');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const path = require('path');

module.exports = {
  target: 'node',
  externals: [nodeExternals()],
  entry: {
    index: './src/index.js'
  },
  output: {
    path: path.join(__dirname, '../dist'),
    filename: './js/[name].bundle.js',
    libraryTarget: 'commonjs2'
  },
  module: { // 設定你的檔案選項
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: "css-loader"
        })
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new ExtractTextPlugin('./css/[name].bundle.css', {allChunks: true}),
    new webpack.DefinePlugin({
      NODE_ENV: JSON.stringify(process.env.NODE_ENV || 'development'),
    })
  ]
};