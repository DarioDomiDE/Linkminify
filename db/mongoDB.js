var mongoose = require('mongoose')
var iDB = require('./iDB.js')
var configFile = require('./../lib/config.js')
var config = configFile.getConfig()

class MongoDB extends iDB {
		
	constructor() {
		super()

		var configUser = config.mongodb.user
		var configPw = config.mongodb.pw
		var configHost = config.mongodb.host
		var configPort = config.mongodb.port
		var configDb = config.mongodb.db
		this.connectionConfig = 'mongodb://'+configUser+':'+configPw+
			'@'+configHost+':'+configPort+'/'+configDb

		this.connection = undefined
		this.connectingRunning = false

	}

	connect() {
		var that = this
		return new Promise(function(resolve, reject) {
	        if(that.connectingRunning) {
	            return resolve(that.connection)
	        }
			that.connectingRunning = true
			that
				.setDb()
				.then(function() {
					that.connection = mongoose.connection
					that.connectingRunning = false
					resolve(that.connection)
				})
				.catch(err => {
					that.connectingRunning = false
					reject(err)
				})
		})
	}

	setDb() {
		var that = this
		return new Promise(function(resolve, reject) {
			mongoose.Promise = global.Promise
			mongoose.connect(that.connectionConfig, {
				config: { autoIndex: false },
				useMongoClient: true
			}).then(() => {
				resolve()
			}).catch(err => {
				reject(err)
			})
		})
	}

	close() {
		this.connection.close()
	}

}

module.exports = MongoDB
MongoDB.instance = new MongoDB()