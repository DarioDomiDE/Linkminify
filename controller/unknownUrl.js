var db = require('./../db')
var outputHandling = require('./../lib/outputHandling.js')

var linksDB = db.linksDB.instance
var output = outputHandling.instance

class UnknownUrl {
	constructor() {}
	
	handle(req, res) {

		var miniUrl = req.params.url
		var conditions = {'miniUrl': miniUrl}

		var findSuccessful = function(data) {
			data.accessCount++
			linksDB.update(conditions, data)

			var finalUrl = data.realUrl
			res.redirect(finalUrl)
			res.end()
		}

		linksDB
			.findOne(conditions, 'realUrl miniUrl accessCount')
			.then(findSuccessful)
			.catch(err => output.throw404(res, err))

	}
	
}
module.exports = UnknownUrl