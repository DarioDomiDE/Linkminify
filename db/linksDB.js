var mongoose = require('mongoose')

class LinksDB {
		
	constructor() {
		var schema = mongoose.Schema
		mongoose.Promise = Promise
		var linkSchema = new schema({
			realUrl: String,
			miniUrl: String,
			accessCount: Number,
			created: { type: Date, default: Date.now }
		})
		this.linkModel = mongoose.model('link', linkSchema)
	}

	create(realUrl, miniUrl) {
		var that = this
		return new Promise(function(resolve, reject) {
			var newLink = new that.linkModel()
			newLink.realUrl = realUrl
			newLink.miniUrl = miniUrl
			newLink.accessCount = 0
			newLink
				.save()
				.then(data => resolve(data))
				.catch(err => reject(err))
		})
	}

	findOne(conditions, returnFields) {
		var that = this
		return new Promise(function(resolve, reject) {
			that.linkModel
				.findOne(conditions)
				.select(returnFields)
				.exec()
				.then(data => resolve(data))
				.catch(err => reject(err)) 
		})
	}

	exists(conditions) {
		var that = this
		return new Promise(function(resolve, reject) {
			that.findOne(conditions, '').
			then(data => resolve(data != null))
			.catch(err => reject(err))
		})
	}

}

module.exports = LinksDB;