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
db.on('error', console.error.bind(console, 'MongoDB connection error:'));



const links = new linksDB();

// FIND ONE
var findCallback = function(err, data) {
	if(err) {
		console.log("err is: " + err)
		// TODO
		return
	}
	console.log("data is " + data)
}
app = links.findOne({'miniUrl': 'adc123'}, 'realUrl miniUrl accessCount', findCallback);

// EXISTS
var existsCallback = function(err, data) {
	console.log(err)
	console.log(data)
}
links.exists({'miniUrl': 'adc123'}, existsCallback)

// CREATE
//links.create('bla.com/hey/was/geht', 'm589s')