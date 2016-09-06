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
    console.log(request.url);
    dispatcher.dispatch(request, response);
  } catch (err) {
    console.log(err);
  }
}
dispatcher.onGet('/team1', function (req, res) {
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

function playerData () {
  console.log('entered playerData');
  var url = 'http://www.fantasyfootballnerd.com/service/players/json/dr4mykguqpd9/';
  var request = http.get(url, function (response) {
    var buffer = '',
      data;
    response.on('data', function (chunk) {
      buffer += chunk;
    });
    response.on('end', function (err) {
      data = JSON.parse(buffer);
    });
  });
  var p1 = new Promise(
    function (resolve, reject) {
      request.onload = function () {
        if (data) {
          console.log('in resolve:', data);
          resolve(data);
        } else {
          reject('No Data!');
        }
      };
    });
  p1.then(
    function (data) {
      console.log('in then: ', data);
      write(players.txt, data);
    })
    .catch(
      function (reason) {
        console.log('Handle rejected promise (' + reason + ') here.');
      });
}
