(function() {
    'use strict';
    var express = require('express');
    var bodyparser = require('body-parser');
    var routes = require('./routes');
    var connection = require('./connection');
    var http = require('http');
    var cors = require('cors');

    var app = express();
    app.use(cors());
    app.use(bodyparser.urlencoded({
        extended: true
    }));
    app.use(bodyparser.json());

    var nflPlayers;

    var options = {
        host: 'www.fantasyfootballnerd.com',
        path: '/service/players/json/dr4mykguqpd9/'
    };

    function callback(res) {
        var data = '';
        res.on('data', function(chunk) {
            data += chunk;
        });
        res.on('end', function() {
            var parsed = JSON.parse(data);
            nflPlayers = parsed.Players;
            // console.log(nflPlayers[0]) works so node is getting data from api
        });
    }

    (function() {
        http.get(options, callback).end();
    })();

    app.get('/nflPlayers', function(req, res) {
        res.send(nflPlayers);
    });

    connection.init();
    routes.configure(app);
    var server = app.listen(8888, function() {
        console.log('Server listening on port ' + server.address().port);
    });
})();
