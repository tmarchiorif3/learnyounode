var myModule = require('./mymodule');

myModule(process.argv[2], process.argv[3], function (error, list) {
  if(error){
    return console.error('Errore:', error);
  }

  list.forEach(function (file) {
    console.log(file);
  });
});