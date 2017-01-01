'use strict';
var path = require('path');

module.exports = {
  entry: {
    app: [
      './src/index.js'
    ],
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'index_bundle.js',
    publicPath: '/public/'
  },
  module: {
    loaders: [
      {
        // .jsxと.jsを対象にする
        test: /\.jsx?$/,
        // node_modulesを除く
        exclude: /node_modules/,
        loaders: ['babel-loader'],
      }
    ]
  }
};