
var db = require('./../db')
var linksDB = db.linksDB.instance

class UnknownUrl {
	constructor() {
		console.log("constructor")
	}
	
	handle(req, res) {

		var throw404 = function(err) {
			if(err != null)
				console.log(err)
			res.writeHead(404)
			res.end()
		}

		var miniUrl = req.params.url
		var conditions = {'miniUrl': miniUrl}

		var findSuccessful = function(data) {
			data.accessCount++
			linksDB.update(conditions, data)

			var finalUrl = data.realUrl
			res.redirect(finalUrl)
			res.end()
		}
		var findFailed  = function(err) {
			console.log('buuuuh :(')
			throw404(err)
		}
		linksDB
			.findOne(conditions, 'realUrl miniUrl accessCount')
			.then(findSuccessful)
			.catch(findFailed)
			


	}
	
}
module.exports = UnknownUrl