var crypto = require('crypto');

class LinkGenerator {
	constructor() {
	}
	generate(realUrl, callback) {
		var charCount = 10
		var hash = crypto.createHash('md5').update(realUrl).digest("hex")
		hash = hash.substring(0, charCount)
		callback(null, hash);
	}
}

module.exports = LinkGenerator;