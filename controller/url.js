var db = require('./../db')
var linkGenerator = require('./../lib/linkGenerator.js')

var linkGen = new linkGenerator()
//var linksDB = new db.linksDB()
var linksDB = db.linksDB.linksDB

// desc: generate miniUrl, check DB if not existing yet and then store it
module.exports = {
	
	get: function(req, res) {
		
		console.log("GET /url")
		res.end()

	},

	post: function(req, res, body) {

		var that = this
		
		// TODO auslagern und nicht doppelt
		var throw200 = function(data) {
			res.writeHead(200)
			if(typeof(data) === 'object')
				data = JSON.stringify(data);
			res.end(data)
		}
		var throw400 = function(err) {
			if(err != null)
				console.log(err)
			res.writeHead(400)
			res.end()
		}
		var throw404 = function(err) {
			if(err != null)
				console.log(err)
			res.writeHead(404)
			res.end()
		}
		var throw409 = function(err) {
			if(err != null)
				console.log(err)
			res.writeHead(409)
			res.end()
		}

		// validate input
		var realUrl = body.realUrl
		if(realUrl === undefined)
			return throw404('realUrl not defined')

		realUrl = realUrl.toLowerCase()

		var n = realUrl.indexOf('https://')
		var n2 = realUrl.indexOf('http://')
		if(n == -1 && n2 == -1) {
			realUrl = "http://" + realUrl
		}


		// create link object
		this.link = {}
		this.link.realUrl = realUrl

		// generate miniUrl hash
		linkGen
			.generate(realUrl)
			.then(miniUrl => checkDb(miniUrl))

		var checkDb = function(miniUrl) {

			// store miniUrl
			that.link.miniUrl = miniUrl

			// check in db if miniUrl exists
			linksDB
				.exists(that.link)
				.then(storeDb)
				.catch(throw409)
		}

		var storeDb = function() {
			// store miniUrl in db
			linksDB
			.create(that.link)
				.then(function(data) {
					throw200(that.link)
				})
				.catch(function(err) {
					throw400(err)
				})

		}



	}
	
}

