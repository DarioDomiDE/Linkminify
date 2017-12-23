var express = require('express'),
	app = express(),
	routeHandler = require('./routeHandler.js'),
	config = require('./config')

// initialize RouteHandler
let routes = new routeHandler();
app = routes.handle(app);

app.listen(config.port)
