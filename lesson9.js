var concatStream = require('concat-stream');
var async = require('async');
var http = require('http');

async.series([
  function(callback){
    http.get(process.argv[2], function (response){
      response.pipe(concatStream(function (data) {
        callback(null, data.toString());
      }));
    });
  },
  function(callback){
    http.get(process.argv[3], function (response){
      response.pipe(concatStream(function (data) {
        callback(null, data.toString());
      }));
    });
  },
  function(callback){
    http.get(process.argv[4], function (response){
      response.pipe(concatStream(function (data) {
        callback(null, data.toString());
      }));
    });
  }
],
function(err, results){
  results.forEach(function(result){
    //risposte qui dentro
    console.log(result);
  });
});