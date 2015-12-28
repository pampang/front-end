var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');

var ROOT_PATH = path.resolve(__dirname);
var APP_PATH = path.resolve(ROOT_PATH, 'app');
var BUILD_PATH = path.resolve(ROOT_PATH, 'build');

module.exports = {
  entry: {
    index_basic: [ path.resolve(APP_PATH, 'js/index_basic'), path.resolve(APP_PATH, 'css/main')]
  },
  output: {
    path: BUILD_PATH,
    filename: 'js/[name].[hash:8].js'
  },
  resolve: {
    extensions: ['', '.js', '.less', '.css']
  },
  devServer: {
  	historyApiFallback: true,
  	hot: true,
  	inline: true,
  	progress: true
  },
  module: {
    loaders: [
      {
        test: /\.css$/,
        loader: 'style!css'
      },
      {
        test: /\.gif/,
        loader: 'url-loader?limit=10000&mimetype=image/gif&name=/image/[hash].[ext]'
      },
      {
        test: /\.jpg/,
        loader: 'url-loader?limit=10000&mimetype=image/jpg&name=/image/[hash].[ext]'
      },
      {
        test: /\.png/,
        loader: 'url-loader?limit=10000&mimetype=image/png&name=/image/[hash].[ext]'
      },
      {
        test: /\.svg/,
        loader: 'url-loader?limit=10000&mimetype=image/svg+xml&name=/image/[hash].[ext]'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: './index.html',
      template: './app/index.html',
      inject: 'head',
      chunks: ['index_basic']
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    })
  ]
};