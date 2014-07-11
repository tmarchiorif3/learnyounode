var fs = require('fs');
var str = fs.readFileSync(process.argv[2]).toString();
var array = str.split('\n');
console.log(array.length-1);