var config = require('./config')

class LinkGenerator {

	constructor() {}

	generate(realUrl) {
		var length = config.getConfig().miniLinkLength
		return this.makeId(length)
	}

	makeId(length) {
		var text = ''
		var possible = '%&)!§(abcdefghijklmnopqrstuvwxyz0123456789'
		for (var i = 0; i < length; i++)
			text += possible.charAt(Math.floor(Math.random() * possible.length));
		return text;
	}
	
}

module.exports = LinkGenerator