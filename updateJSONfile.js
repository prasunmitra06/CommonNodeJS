var fs = require('fs');

var filename = './input.json';

var file = require('./input.json');


file.table[2].square = 5;


fs.writeFile('input1.json', JSON.stringify(file), function (err) {
	  if (err) return console.log(err);
	  console.log(JSON.stringify(file));
	});