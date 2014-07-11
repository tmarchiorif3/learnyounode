var http = require('http');
var fs = require('fs');
var map = require('through2-map');
var url = require('url');

var server = http.createServer(function (request, response) {
  response.writeHead(200, { 'Content-Type': 'application/json' })
  var urlParse = url.parse(request.url, true);
  var date = new Date(urlParse.query.iso);
  if (urlParse.pathname === '/api/parsetime') {
    response.write(JSON.stringify({
      'hour': date.getHours(),
      'minute': date.getMinutes(),
      'second': date.getSeconds()
    }));
    response.end();
  } else if (urlParse.pathname === '/api/unixtime') {
    response.write(JSON.stringify({
      'unixtime': date.getTime()
    }));
    response.end();
  } else {
    response.end();
  }
});
server.listen(process.argv[2]);