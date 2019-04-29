fs = require('fs');
var parser = require('xml2json');

fs.readFile( './testXML.xml', function(err, data) {
    var json = parser.toJson(data);
    console.log("to json ->", json);
 });