var crypto = require('crypto')
var config = require('./../production.env')

class LinkGenerator {

	constructor() {}

	generate(realUrl) {
		return new Promise(function(resolve, reject) {
			var charCount = config.miniLinkLength
			var hash = crypto
				.createHash('md5')
				.update(realUrl)
				.digest("hex")
				.substring(0, charCount)
			resolve(hash)
		})
	}
	
}

module.exports = LinkGenerator