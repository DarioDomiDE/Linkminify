var unknownUrlDomain = require('./../domain/unknownUrl')
var outputHandling = require('./../lib/outputHandling.js')

var unknownUrl = new unknownUrlDomain()
var output = outputHandling.instance

class UnknownUrlRoute {

	constructor() {}
	
	handle(req, res) {

		var miniUrl = req.params.url

		unknownUrl
			.handle(miniUrl)
			.then(data => {
				res.redirect(data.realUrl)
				res.end()
			})
			.catch(err => output.throw404(res, err))

	}
	
}
module.exports = UnknownUrlRoute