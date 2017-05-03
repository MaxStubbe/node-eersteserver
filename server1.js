var http = require('http');
var express = require('express');

var app = express();


function onRequest(request, response){
	console.log('er was een request');
	response.writeHead(200, {'Content-Type': 'text/plain'});
	response.write('Super coole mega vette server');
	response.end();
}
	
app.listen(process.env.PORT || 3000, function(){
	console.log('De server luistert op port 3000');
};
	
