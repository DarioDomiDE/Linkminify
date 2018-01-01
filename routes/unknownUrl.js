var unknownUrlDomain = require('./../domain/unknownUrl')
var outputHandling = require('./../lib/outputHandling.js')

var unknownUrl = new unknownUrlDomain()
var output = outputHandling.instance

class UnknownUrlRoute {

	constructor() {}
	
	handle(req, res) {

		var miniUrl = req.params.url
				console.log("handle1")

		unknownUrl
			.handle(miniUrl)
			.then(realUrl => {
				res.redirect(realUrl)
				res.end()
			})
			.catch(err => output.throw404(res, err))

	}
	
}
module.exports = UnknownUrlRoute