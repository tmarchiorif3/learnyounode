var fs = require('fs');
var str = fs.readFile(process.argv[2], 'utf8', function callback(error, data){
  if(error){
    throw error;
  }
  var array = data.split('\n');
  console.log(array.length-1);
});