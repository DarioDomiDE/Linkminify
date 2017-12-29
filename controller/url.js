var db = require('./../db')
var lib = require('./../lib')

var linkGenerator = lib.linkGenerator
var linkGen = new linkGenerator()
var linksDB = db.linksDB.instance

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

		this.link = {}
		this.link.realUrl = realUrl

		// generate miniUrl hash
		linkGen
			.generate(realUrl)
			.then(miniUrl => storeDb(miniUrl))
			.catch(throw400)

		// store miniUrl in db
		var storeDb = function(miniUrl) {
			that.link.miniUrl = miniUrl
			linksDB
			.create(that.link)
				.then(throw200(that.link))
				.catch(throw400)

		}



	}
	
}

