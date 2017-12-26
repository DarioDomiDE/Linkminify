var crypto = require('crypto')
var config = require('./../config')

class LinkGenerator {
	constructor() {
	}
	generate(realUrl, callback) {
		var charCount = config.miniLinkLength
		
		var hash = crypto.createHash('md5').update(realUrl).digest("hex")
		hash = hash.substring(0, charCount)
		callback(null, hash)
	}
}

module.exports = LinkGenerator