var express = require('express'),
	app = express(),
	routeHandler = require('./routeHandler.js'),
	linksDB = require('./db/linksDB.js'),
	config = require('./production.env'),
	utils = require('./utils')

// initialize RouteHandler
const routes = new routeHandler();
app = routes.handle(app);
app.listen(config.port)

// initialize Mongoose
var mongoose = require('mongoose')
var user = config.mongodb.user
var pw = config.mongodb.pw
var host = config.mongodb.host
var port = config.mongodb.port
var db = config.mongodb.db
var mongoConnection = 'mongodb://'+user+':'+pw+'@'+host+':'+port+'/'+db
mongoose.connect(mongoConnection, { config: { autoIndex: false }, useMongoClient: true });
mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on('error', function(err) {
	console.log('MongoDB connection error: ' + err)
	// TODO throw error - 404 or something else
	//res.writeHead(404)
	//req.end()
});


const links = new linksDB();

// FIND ONE
var findSuccessful = function(data) {
	console.log('result: ' + data)
}
var findFailed  = function(data) {
	console.log('buuuuh :( : ' + data)
}
links
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
links
	.exists({'miniUrl': 'adc1234'})
	.then(existsSuccessful)
	.catch(existsFailed)

// CREATE
//links
//.create('bla.com/hey/was/geht', 'm589s')
	//.then(function(data) { console.log(data) })
	//.catch(function(err) { console.log(err) })