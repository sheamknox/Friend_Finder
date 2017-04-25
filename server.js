var express = require('express');

var app = express();
var PORT = 3000;

app.get('/', function(req, res){
	res.send("Server is working...");
});

app.listen(3000, function(){
	console.log("Server running on port: " + PORT)
});