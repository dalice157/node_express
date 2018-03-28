const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
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
				test: /\.(js|jsx)$/, 
				loader: 'babel-loader', 
				exclude: /node_modules/ 
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
    new CleanWebpackPlugin(['../dist/']),
    new HtmlWebpackPlugin({ //生成 html 文件
			title: 'Webpack Test',
			template: path.join(__dirname, '../public/index.html'), //輸入路徑
			filename: path.resolve(__dirname, '../dist/index.html'), //輸出路徑
		}),
    new ExtractTextPlugin('./css/[name].bundle.css'),
    new webpack.DefinePlugin({
      NODE_ENV: JSON.stringify(process.env.NODE_ENV || 'dev'),
    })
  ]
};