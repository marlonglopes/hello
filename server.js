var http = require('http');

var handleRequest = function(request, response) {
  console.log('Received request for URL: ' + request.url);
  response.writeHead(200);
  response.end('Hello World Baaaah from 0.0.4!');
};
var www = http.createServer(handleRequest);
www.listen(8080);
