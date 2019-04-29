var fs = require('fs');
var builder = require('xmlbuilder');
var doc = builder.create('root')
  .ele('test')
  .txt('complete')
  	.up()
  .ele('test')
  .txt('complete1')
  	.up()
  .ele('test')
  .txt('complete2')
  	.up()
.ele('chieldnode')
    .att('id', 'chn')
    .ele('ch1')
      .att('id', '1')
      .txt('Mitra Prasun')
      	.up()
    .ele('ch1')
      .att('id', '2')
      .txt('Prasun Mitra')
      	.up()
    .ele('ch1')
      .att('id', '3')
      .txt('Tamal Mitra')  	
.end({ pretty: true });
console.log(doc.toString());
fs.writeFile('testXML.xml', doc.toString(), function (err) {
	  if (err) throw err;
	  console.log('Saved!');
	});