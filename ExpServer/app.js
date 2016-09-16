(function () {
  'use strict';
  var express = require('express');
  var bodyparser = require('body-parser');
  var routes = require('./routes');
  var connection = require('./connection');

  var app = express();
  app.use(bodyparser.urlencoded({extended: true}));
  app.use(bodyparser.json());

  connection.init();
  routes.configure(app);
  var server = app.listen(8888, function () {
    console.log('Server listening on port ' + server.address().port);
  });
})();
