var urlDomain = require('./../domain/url')
var outputHandling = require('./../lib/outputHandling.js')

var output = outputHandling.instance

module.exports = {
	
	get: function(req, res) {
		
		// NOT IMPLEMENTED YET

	},

	post: function(req, res, body) {

		urlDomain
			.post(body)
			.then(data => output.throw201(res, data))
			.catch(err => output.throw400(res, err))

	}
	
}

