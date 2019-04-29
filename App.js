const express = require('express')
const app = express()
const morgan = require('morgan')

app.use(morgan('short'))

app.get("/",(req,res)=> {
  res.log("Responding to root route");
  res.send("API Server running...")
})

app.get("/users",(req,res) => {

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

  res.json(data)

  //res.send("Nodemos auto update when I save the file");
})

app.listen(3003,() => {
  console.log("Server is up and listening on 3003...");
})
