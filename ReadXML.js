var fs = require('fs'), xml2js = require('xml2js');

var parser = new xml2js.Parser();

fs.readFile('testXML.xml', function(err, data) {
		
	parser.parseString(data, function(err, result) {
		console.dir(result);
		console.log('Read Finished');
	});
});