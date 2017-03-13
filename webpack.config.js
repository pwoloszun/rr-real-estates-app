const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const VENDOR_LIBS = [
  "babel-polyfill",
  "lodash",
  "react",
  "react-dom",
  "react-redux",
  "react-router",
  "redux",
  "redux-form",
  "redux-saga",
  "whatwg-fetch"
];

const devPort = 4000;
const ENV = process.env.npm_lifecycle_event;
const isProd = ENV === 'build';

module.exports = {
  entry: {
    bundle: './app/index.js',
    vendor: VENDOR_LIBS
  },

  output: {
    publicPath: isProd ? '/' : 'http://localhost:' + devPort + '/',
    path: path.join(__dirname, 'dist'),
    filename: '[name].[chunkhash].js'
  },

  module: {
    rules: [
      {
        use: 'babel-loader',
        test: /\.js$/,
        exclude: /node_modules/
      },
      {
        use: ['style-loader', 'css-loader'],
        test: /\.css$/
      },
      {
        test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'file-loader?name=fonts/[name].[hash].[ext]?'
      }
    ]
  },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      names: ['vendor', 'manifest']
    }),
    new HtmlWebpackPlugin({
      template: 'app/index.html'
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    }),
    new webpack.ProvidePlugin({
      // make fetch available
      fetch: 'exports-loader?self.fetch!whatwg-fetch',
    })
  ],

  devtool: 'source-map',

  target: 'web', // Make web variables accessible to webpack, e.g. window

  devServer: {
    historyApiFallback: true
  }
};
