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

	create(data) {
		var that = this
		return new Promise(function(resolve, reject) {
			var newLink = new that.linkModel()
			newLink.realUrl = data.realUrl
			newLink.miniUrl = data.miniUrl
			newLink.accessCount = 0
			newLink
				.save()
				.then(resolve)
				.catch(reject) 
		})
	}

	findOne(conditions, returnFields) {
		var that = this
		return new Promise(function(resolve, reject) {
			that.linkModel
				.findOne(conditions)
				.select(returnFields)
				.exec()
				.then(resolve)
				.catch(reject) 
		})
	}

	exists(conditions) {
		var that = this
		return new Promise(function(resolve, reject) {
			that.findOne(conditions, '').
			then(data => (data == null) ? resolve() : reject(null) )
			.catch(reject)
		})
	}

}

module.exports = LinksDB