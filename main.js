var express = require('express'),
	app = express();

// initialize RouteHandler
const RouteHandler = require('./routeHandler.js')
let routes = new RouteHandler();
app = routes.handle(app);

const PORT = 80;
app.listen(PORT)
