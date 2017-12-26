var mongoose = require('mongoose'),
	iDB = require('./iDB.js')

class MongoDB extends iDB {
		
	constructor() {
		super()
	}

	setDb(connection) {
		this.connection = mongoose.connection
		return new Promise(function(resolve, reject) {
			mongoose.Promise = global.Promise
			mongoose.connect(connection, {
				config: { autoIndex: false },
				useMongoClient: true
			}).then(() => {
				resolve()
			}).catch(err => {
				reject(err)
			})
		})

		/*
		this.connection.on('error', function(err) {
			console.log('MongoDB connection error: ' + err)
			// TODO throw error
		})
		this.connection.on('error', function(err) {
			console.log('MongoDB connection error: ' + err)
			// TODO throw error
		})*/

	}

	close() {
		this.connection.close()
	}

}

module.exports = MongoDB