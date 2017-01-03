var webpackDevMiddleware = require("webpack-dev-middleware"); 
var webpackHotMiddleware = require("webpack-hot-middleware"); 
var webpack = require("webpack");
var config = require("./webpack.config.js");
var express = require('express');
var port = 8080;
var app = express();

Object.keys(config.entry).forEach(function (key) {
  config.entry[key].unshift(
    'webpack-hot-middleware/client' // webpack-dev-serverで指定したスクリプトとは全く別物
  );
});

config.plugins = [
  new webpack.HotModuleReplacementPlugin(), 
];

var compiler = webpack(config);

// webpackの実行(監視)と、生成されたファイルを公開するためのルーティング
app.use(webpackDevMiddleware(compiler, {
  publicPath: config.output.publicPath
}));

// 変更があった場合にclientへ変更を通知する
app.use(webpackHotMiddleware(compiler));

// index.htmlが使われているわけでないことを念のため明確にするため
app.get('/', function (req, res) {
  res.send('I am using middleware!<script src="public/index_bundle.js"></script>');
});

app.listen(port, function(error) {
  if (error) {
    console.error(error)
  } else {
    console.info("==> 🌎  Listening on port %s. Open up http://localhost:%s/ in your browser.", port, port)
  }
});
