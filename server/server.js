/*jshint esversion: 6 */

// Lets require/import the HTTP module
var http = require('http');
var dispatcher = require('httpdispatcher');
var templates = require('./js/manage_file');
// Lets define a port we want to listen to
var PORT = 8080;

// We need a function which handles requests and send response
function handleRequest (request, response) {
  response.setHeader('Access-Control-Allow-Origin', '*');
  response.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,Content-Type');
  try {
    // writes player data to a file
    playerData();

    dispatcher.dispatch(request, response);
  } catch (err) {
    console.log(err);
  }
}

dispatcher.onGet('/yourTeam', function (req, res) {
  res.writeHead(200, {
    'Content-Type': 'application/json'
  });
  var body = templates.read('players.txt');
  res.end(body); // readfile
});

// Create a server
var server = http.createServer(handleRequest);

// Lets start our server
server.listen(PORT, function () {
  // Callback triggered when server is successfully listening. Hurray!
  console.log('Server listening on: http://localhost:%s', PORT);
});
