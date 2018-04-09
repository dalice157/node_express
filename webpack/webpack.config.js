const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const entryPath = path.resolve(__dirname, '../src/index.js');

const webpackConfig = {
  target: 'web',
  entry: {
    index: entryPath
  },
  output: {
    path: path.join(__dirname, '../dist'),
    filename: './js/[name].bundle.js',
    // libraryTarget: 'commonjs2' //當target指定為node時才使用
  },
  module: { // 設定你的檔案選項
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader'
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
			template: path.join(__dirname, '../src/index.html'), //輸入路徑
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
  ],
  devServer: {
    contentBase: path.join(__dirname, '../dist'),//本地服务器所加载的页面所在的目录
    historyApiFallback: true,//不跳转
    inline: true,//当源文件改变时会自动刷新页面
    port:3000//端口
  }
};
module.exports = webpackConfig;