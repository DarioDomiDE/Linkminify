var mongoose = require('mongoose'),
	utils = require('./../utils')

var handleError = utils.errorHandling.handleError

class LinksDB {
		
	constructor() {
		var schema = mongoose.Schema
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
				.then(function (data) { 
					return resolve(data)
				})
				.catch(function(err) {
					handleError('error saving db: ' + err)
					return reject(err)
				})
		})

	}

	findOne(conditions, returnFields) {
		var that = this
		return new Promise(function(resolve, reject) {
			that.linkModel
				.findOne(conditions)
				.select(returnFields)
				.exec()
				.then(function (data) {
					return resolve(data)
				})
				.catch(function(err) {
					handleError('error find db: ' + err)
					return reject(err)
				}) 
		})
	}

	exists(conditions) {
		var that = this
		return new Promise(function(resolve, reject) {
			that.findOne(conditions, '').
			then(function(data) {
				return resolve (data != null && data.length != 0)
			})
			.catch(function(err) {
				return reject(err)
			})
		})
	}

}

module.exports = LinksDB;