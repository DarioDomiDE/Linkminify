var express = require('express'),
	app = express(),
	routeHandler = require('./routeHandler.js'),
	linksDB = require('./db/linksDB.js'),
	config = require('./config'),
	utils = require('./utils')

// initialize RouteHandler
const routes = new routeHandler();
app = routes.handle(app);
app.listen(config.port)

// initialize Mongoose
var mongoose = require('mongoose')
var mongoConnection = 'mongodb://dario:caf9c0937a@78.46.178.185:27017/finance';
mongoose.connect(mongoConnection, { config: { autoIndex: false }, useMongoClient: true });
mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on('error', function() {
	console.error.bind(console, 'MongoDB connection error:')
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