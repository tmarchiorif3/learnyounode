var fs = require('fs');
var path = require('path');
var extension = '.' + process.argv[3];
fs.readdir(process.argv[2], function callback(error, list){
  if(error){
    throw error;
  }
  list.forEach(function(file){
    extension_of_file = path.extname(file);
    if (extension == extension_of_file){
      console.log(file);
    }
  });
});