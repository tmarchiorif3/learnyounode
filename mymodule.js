var fs = require('fs');
var path = require('path');

module.exports = function (dir, filterStr, callback) {
  var extension = '.' + filterStr;
  fs.readdir(dir, function (err, list) {
    if (err){
      return callback(err);
    }
    list = list.filter(function (file) {
      if (path.extname(file) == extension){
        return true;
      } else {
        return false;
      }
    });

    callback(null, list);
  });
}