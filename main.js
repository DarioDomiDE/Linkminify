var express = require('express')
var app = express()
var db = require('./db')
var lib = require('./lib')
var utils = require('./utils')

var handleError = utils.errorHandling.handleError
var routes = lib.routeHandler.instance

// initialize RouteHandler
app = routes.handle(app)

// initialize DB
config = lib.config.getConfig()
var configUser = config.mongodb.user
var configPw = config.mongodb.pw
var configHost = config.mongodb.host
var configPort = config.mongodb.port
var configDb = config.mongodb.db
var mongoConnection = 'mongodb://'+configUser+':'+configPw+
					  '@'+configHost+':'+configPort+'/'+configDb

const mongoDB = new db.mongoDB()
mongoDB
	.setDb(mongoConnection)
	.then(() => {
		console.log('MongoDB Connection successful')
		app.listen(config.port)
	})
	.catch(err => {
		handleError('MongoDB Connection failed: ' + err)
	})