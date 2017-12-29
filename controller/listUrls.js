var db = require('./../db')

var linksDB = db.linksDB.instance

module.exports = {
	
	get: function(req, res) {
		// TODO READ DB and show a list of URLs here
		console.log('/listUrls GET')
		//res.send('/listUrls GET')

		var throw200 = function(data) {
			res.writeHead(200)
			if(typeof(data) === 'object')
				data = JSON.stringify(data);
			res.end(data)
			console.log(data)
		}
		var throw404 = function(err) {
			console.log("throw404")
			if(err !== null)
				console.log(err)
			res.writeHead(404)
			res.end()
		}

		var findSuccessful = function(data) {
			throw200(data)
		}
		var findFailed  = function(err) {
			throw404(err)
		}
		var conditions = {}
		var returnFields = 'realUrl miniUrl accessCount'
		linksDB
			.find(conditions, returnFields)
			.then(findSuccessful)
			.catch(findFailed)

	}
	
}

