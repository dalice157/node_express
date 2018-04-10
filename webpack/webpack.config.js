const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

const webpackConfig = {
  target: 'web',
  entry: {
    index: './src/index.js'
  },
  output: {
    path: path.join(__dirname, '../dist'),
    filename: './js/[name].bundle.js',
    // libraryTarget: 'commonjs2' //當target指定為node時才使用
  },
  module: { // 設定你的檔案選項
    rules: [
      { 
				test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            "presets": [
              ["env", {
                "modules": false
              }],
              "react",
            ]
          }
        }
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
    new CleanWebpackPlugin(['dist'], {
      "exclude": ['posts.json'],//不刪除此檔
      root: path.join(__dirname, '../'), //設定root的路徑
      verbose: true
    }),
    new HtmlWebpackPlugin({ //生成 html 文件
			title: 'Webpack Test',
			template: path.join(__dirname, '../public/index.html'), //輸入路徑
			filename: path.resolve(__dirname, '../dist/index.html'), //輸出路徑
		}),
    new ExtractTextPlugin('./css/[name].bundle.css'),
    new webpack.DefinePlugin({
      NODE_ENV: JSON.stringify(process.env.NODE_ENV || 'dev'),
    }),
		new webpack.ProvidePlugin({ 
			// 利用 webpack.ProvidePlugin 讓 $ 和 jQuery 可以連結到 jquery library
			$: 'jquery',
			jQuery: 'jquery'
		})
  ]
};
module.exports = webpackConfig;