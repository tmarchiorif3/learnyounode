var concatStream = require('concat-stream');
var http = require('http');

http.get(process.argv[2], function callback(response){
  response.pipe(concatStream(function (data) {
    console.log(data.toString().length);
    console.log(data.toString());
  }));

});