var express = require('express')
var app = express()
var db = require('./db')
var lib = require('./lib')
var utils = require('./utils')
var config = require('./lib/config.js').getConfig()

var handleError = utils.errorHandling.handleError
var routes = lib.routeHandler.instance

// initialize RouteHandler
app = routes.handle(app)

// initialize DB

var mongoDB = db.mongoDB.instance
mongoDB
	.connect()
	.then(connection => {
		console.log('MongoDB Connection successful')
		app.listen(config.port)
	})
	.catch(err => {
		handleError('MongoDB Connection failed: ' + err)
	})