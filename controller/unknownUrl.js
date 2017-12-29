
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

		var findSuccessful = function(data) {
			data.accessCount++
			var conditions = {miniUrl: data.miniUrl}
			linksDB.update(conditions, data)

			var finalUrl = data.realUrl
			res.redirect(finalUrl)
			res.end()
		}
		var findFailed  = function(err) {
			throw404('buuuuh :( : ' + err)
		}
		linksDB
			.findOne({'miniUrl': miniUrl}, 'realUrl miniUrl accessCount')
			.then(findSuccessful)
			.catch(findFailed)
			


	}
	
}
module.exports = UnknownUrl