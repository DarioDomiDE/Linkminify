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
				.then(data => (data !== null) ? resolve(data) : reject(null))
				.catch(reject) 
		})
	}

	exists(conditions) {
		var that = this
		return new Promise(function(resolve, reject) {
			that
				.findOne(conditions, '')
				.then(data => (data !== null) ? resolve(data) : reject(null))
				.catch(reject)
		})
	}

	remove(data) {
		var that = this
		return new Promise(function(resolve, reject) {
			that.linkModel
				.remove({realUrl: data.realUrl, miniUrl: data.miniUrl})
				.then(resolve)
				.catch(reject)
		})
	}

	update(condition, data) {
		var that = this
		return new Promise(function(resolve, reject) {
			that.linkModel
				.updateOne(condition, data)
				.then(resolve)
				.catch(reject)
		})
	}

	find(condition, returnFields) {
		var that = this
		return new Promise(function(resolve, reject) {
			that.linkModel
				.find(condition, returnFields)
				.then(resolve)
				.catch(reject)
		})
	}


}

module.exports = LinksDB
LinksDB.instance = new LinksDB()