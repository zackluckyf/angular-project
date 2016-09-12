/*jshint esversion: 6 */

var http = require('http');
var templates = require('./manage_file');
var playerNames;

function playerData () {
  var url = 'http://www.fantasyfootballnerd.com/service/players/json/dr4mykguqpd9/';
  var data;
  var request = http.get(url, function (response) {
    var buffer = '';
    response.on('data', function (chunk) {
      buffer += chunk;
    });
    response.on('end', function (err) {
      data = JSON.parse(buffer);
      writeData(data.Players);
    });
  }).on('error', (e) => {
    console.log(`Got error: ${e.message}`);
  });
}

function writeData (data) {
  'use strict';
  console.log('started parse');
  var nflPlayers = data.filter(function (player) {
    return player.active === '1';
  }).map(function (player) {
    return player.displayName;
  });
  templates.write('nflPlayers.txt', nflPlayers);
}

function readData (query) {
  query = query.toLowerCase;
  playerNames = playerNames || templates.read('nflPlayers.txt').split(',');
  return playerNames.filter(function (player) {
    player = player.toLowerCase();
    if (player.includes(query)) {
      return player;
    }
  });
}

module.exports = {
  readData: readData,
  writeData: writeData,
  playerData: playerData,
  playerNames: playerNames
};
