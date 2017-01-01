var express = require('express');

var app = new express();
var port = 3000

app.get('/', function (req, res) {
  res.send('Hello, World!<script src="public/index_bundle.js"></script>');
});

app.listen(port, function(error) {
  if (error) {
    console.error(error)
  } else {
    console.info("==> 🌎  Listening on port %s. Open up http://localhost:%s/ in your browser.", port, port)
  }
});

