var WebpackDevServer = require("webpack-dev-server");
var webpack = require("webpack");
var config = require("./webpack.config.js");

Object.keys(config.entry).forEach(function (key) {
  config.entry[key].unshift(
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/dev-server'
  );
});

config.plugins = [
  new webpack.HotModuleReplacementPlugin(), 
];

var compiler = webpack(config);
var server = new WebpackDevServer(compiler, {
    publicPath: config.output.publicPath,
    hot: true,
    proxy: { '*': 'http://localhost:3000' } // proxyの設定
});
server.listen(8080);
