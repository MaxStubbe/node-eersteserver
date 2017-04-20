var http = require('http');

function onRequest(request, response){
	console.log('er was een request');
	response.writeHead(200, {'Content-Type': 'text/plain'});
	response.write('Gang gang gang');
	response.end();
}
	
	http.createServer(onRequest).listen(process.env.PORT || 3000);
	
	console.log('De server luistert op port 3000');