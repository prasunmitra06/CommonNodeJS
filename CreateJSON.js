
var fs = require('fs');

var data = {} 
data.table = []

for(i=0; i<10; i++){
	var obj = {
			id: i,
			square: i*i
	}
	
	data.table.push(obj);
}

fs.writeFile("input.json", JSON.stringify(data), function(err){
	if(err) throw err;
		console.log('Complete');
}
	
);