/*jshint esversion: 6 */
var http = require('http');
var dispatcher = require('httpdispatcher');
var playerFunctions = require('./js/player_functions');
var PORT = 8080;
// We need a function which handles requests and send response
function handleRequest (request, response) {
  response.setHeader('Access-Control-Allow-Origin', '*');
  response.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,Content-Type');
  try {
    // writes player data to a file
    playerFunctions.playerData();
    setTimeout(function () {
      console.log(playerFunctions.readData('Carson'));
    }, 15000);
    dispatcher.dispatch(request, response);
  } catch (err) {
    console.log(err);
  }
}
// Create a server
var server = http.createServer(handleRequest);
// Lets start our server
server.listen(PORT, function () {
  // Callback triggered when server is successfully listening. Hurray!
  console.log('Server listening on: http://localhost:%s', PORT);
});
