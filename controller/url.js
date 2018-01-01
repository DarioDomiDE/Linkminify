var db = require('./../db')
var lib = require('./../lib')

var linkGenerator = lib.linkGenerator
var linkGen = new linkGenerator()
var linksDB = db.linksDB.instance
var output = lib.output.instance

// desc: generate miniUrl, check DB if not existing yet and then store it
module.exports = {
	
	get: function(req, res) {
		
		console.log("GET /url")
		res.end()

	},

	post: function(req, res, body) {

		// validate input
		var realUrl = body.realUrl
		if(!realUrl || 0 === realUrl.length)
			return output.throw400(res, 'realUrl not defined')

		// check and fix input
		realUrl = realUrl.toLowerCase()
		var n = realUrl.indexOf('https://')
		var n2 = realUrl.indexOf('http://')
		if(n == -1 && n2 == -1) {
			realUrl = "http://" + realUrl
		}

		// create link obj
		this.link = {}
		this.link.realUrl = realUrl

		// generate miniUrl hash and store it
		this.link.miniUrl = linkGen.generate(realUrl)
		linksDB
			.create(this.link)
			.then(output.throw201(res, this.link))
			.catch(err => output.throw400(res, err))



	}
	
}

