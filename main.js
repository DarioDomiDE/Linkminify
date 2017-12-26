var express = require('express')
var app = express()
var routeHandler = require('./routeHandler.js')
var db = require('./db')
var config = require('./production.env')
var utils = require('./utils')

let handleError = utils.errorHandling.handleError

// initialize RouteHandler
const routes = new routeHandler()
app = routes.handle(app)
//app.listen(config.port)

// initialize DB
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


//var linksDB = new db.linksDB()

/*
// FIND ONE
var findSuccessful = function(data) {
	console.log('result: ' + data)
}
var findFailed  = function(err) {
	console.log('buuuuh :( : ' + err)
}
linksDB
	.findOne({'miniUrl': 'adc123'}, 'realUrl miniUrl accessCount')
	.then(findSuccessful)
	.catch(findFailed)


// EXISTS
var existsSuccessful = function(data) {
	console.log('existsSuccessful')
	console.log(data)
}
var existsFailed = function(err) {
	console.log('existsFailed')
	console.log(err)
}
linksDB
	.exists({'miniUrl': 'adc1234'})
	.then(existsSuccessful)
	.catch(existsFailed)
*/

// CREATE
//links
//.create('bla.com/hey/was/geht', 'm589s')
	//.then(function(data) { console.log(data) })
	//.catch(function(err) { console.log(err) })