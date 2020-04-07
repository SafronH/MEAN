var http = require("http");
var fs = require('fs');


http.createServer(function(request, response) {
	
//response.writeHead(200,{"Content-Type ":"text/html"});
var readStream = fs.createReadStream('index.html', 'utf8');
readStream.pipe(response);
})
.listen(8088);

console.log("Hey there! I am running the brand bage...");