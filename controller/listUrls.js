var db = require('./../db')

var linksDB = db.linksDB.instance

module.exports = {
	
	get: function(req, res) {
		var throw200 = function(data) {
			res.writeHead(200)
			if(typeof(data) === 'object')
				data = JSON.stringify(data);
			res.end(data)
		}
		var throw404 = function(err) {
			if(err !== null)
				console.log(err)
			res.writeHead(404)
			res.end()
		}

		var conditions = {}
		var returnFields = 'realUrl miniUrl accessCount'
		linksDB
			.find(conditions, returnFields)
			.then(throw200)
			.catch(throw404)

	}
	
}

