var utils = require('./utils')

class LinksDB {
		
	constructor() {

	}

	create(realUrl, miniUrl) {
		var newLink = new linkModel()
		newLink.realUrl = realUrl
		newLink.miniUrl = miniUrl
		newLink.accessCount = 0
		newLink.save(saveCallback)
		var saveCallback = function(err) {
			if (err) {
				return handleError("error saving db: " + err)
			}
		}

	}

	findOne(conditions, returnFields, callback) {
		var query = linkModel
			.findOne(conditions)
			.select(returnFields)
		query.exec(function (err, data) {
			if (err)
				handleError('error find db: ' + err)
			callback(err, data)
		})
	}

	exists(conditions, returnFields, callback) {
		var cb = function(err, data)
		{
			var exists = data.length != 0
			callback(err, exists)
		}
		findOne(conditions, returnFields, cb)
	}




}
module.exports = LinksDB;