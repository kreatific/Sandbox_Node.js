/*
* index.js
*
* @done HTTP Server					- accepts HTTP requests
* @todo Request Router				- Routes HTTP requests to request handlers
* @todo Request Handlers			- Handle requests that have been routed to it
* @todo Request Data Handlers		- Handle GET/POST requests in a nice way
* @todo View Logic					- View logic that the request handlers can use
* @todo Upload Handling				- Handler that manages uploaded images
*/

// require modules
var server	= require("./server"),
	router	= require("./router");

// start HTTP server
// we inject router.route to loosely
// couple server and router by injecting the dependency
server.start(router.route);