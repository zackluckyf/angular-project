/*jshint esversion: 6 */

var http = require('http');
var templates = require('./js/manage_file');

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
  var data = templates.read('nflPlayers.txt', query);
  return data;
}

module.exports = {
  readData: readData,
  writeData: writeData,
  playerData: playerData
};
