var config = require('./config')

class LinkGenerator {

	constructor() {}

	generate(realUrl) {
		var makeId = function(length) {
			var text = ''
			var possible = '%&)!§(abcdefghijklmnopqrstuvwxyz0123456789'
			for (var i = 0; i < length; i++)
				text += possible.charAt(Math.floor(Math.random() * possible.length));
			return text;
		}
		return new Promise(function(resolve, reject) {
			var length = config.getConfig().miniLinkLength
			var id = makeId(length)
			resolve(id)
		})

	}
	
}

module.exports = LinkGenerator