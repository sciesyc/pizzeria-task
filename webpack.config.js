const path = require('path');
const HTMLPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
module.exports = {
    mode: "development",
    entry: "./src/index.js",
    output: {
        filename: "main.js", 
        path: path.resolve(__dirname, "dist")
    },
    optimization: {
      minimizer: [
        new OptimizeCssAssetsPlugin({}),
        new UglifyJsPlugin({})
      ]
    },
    plugins: [
      new HTMLPlugin({
        filename: 'index.html',
        // template: './src/index.html'
      }),
      new MiniCssExtractPlugin({
        filename: 'style.css'
      })
    ],
    devtool: "source-map",
    module: {
        rules: [
          {
            test: /\.m?js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-env']
              }
            }
          },
          {
            test: /\.css$/i, 
            use: [MiniCssExtractPlugin.loader, 'css-loader']
          }
        ],
      }
};