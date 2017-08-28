const fs = require('fs');
const path = require('path');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  devtool: 'inline-source-map',
  entry: {index:'./dev/index.js'},
  output: {
    path: path.resolve(__dirname, 'dev/dist'),
    filename: '[name].js',
    sourceMapFilename: '[name].js.map'
  },
  devServer: {
    contentBase: path.join(__dirname, "dev/dist"),
    compress: true,
    port: 4000
  },
  module: {
    rules: [
      {test: /\.css$/, use: 'css-loader'},
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.(png|svg|jpg|gif|ico)$/,
        use: [
          'file-loader'
        ]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          'file-loader'
        ]
      },
      { test: /\.html/, loader: "handlebars-loader" },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015', 'react']
          }
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, './dev/layout/default.html')
    })
  ],
  resolve: {
    alias: {
      'src': path.join(__dirname, './src')
    }
  }
};