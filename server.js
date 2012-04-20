/*
* server.js
*/

// require modules
var http	= require('http'),
	url		= require('url');


// create start()
function start(route) {

	function onHttpRequest(request, response) {

		// get the pathname
		var pathname	= url.parse(request.url).pathname;

		// output msg
		console.log("HTTP request received");
		console.log("Request for " + pathname + " received.");

		//..
		route(pathname);

		// write a response header for status code 200
		response.write("Hello World");

		// end
		response.end();

	}

	// create server and set it to listen on port
	http.createServer(onHttpRequest).listen(3000);

	// output msg
	console.log("Server has started on port 3000");

}

// export start() to make it publicly available
exports.start 	= start;