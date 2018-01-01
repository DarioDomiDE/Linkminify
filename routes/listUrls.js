var listUrlsDomain = require('./../domain/listUrls')
var outputHandling = require('./../lib/outputHandling.js')

var output = outputHandling.instance

module.exports = {
	
	get: function(req, res) {

		listUrlsDomain
			.get()
			.then(data => output.throw200(res, data))
			.catch(err => output.throw404(res, err))

	}
	
}

