var express = require('express'),
	app = express();

// initialize RouteHandler
const RouteHandler = require('./routeHandler.js')
let routes = new RouteHandler();
app = routes.handle(app);

app.listen(80)
