var db = require('./../db')
var lib = require('./../lib')

var linksDB = db.linksDB.instance
var output = lib.output.instance

module.exports = {
	
	get: function(req, res) {

		var conditions = {}
		var returnFields = 'realUrl miniUrl accessCount'
		linksDB
			.find(conditions, returnFields)
			.then(data => output.throw200(res, data))
			.catch(err => output.throw404(res, err))

	}
	
}

