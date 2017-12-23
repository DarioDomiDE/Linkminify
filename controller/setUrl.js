

module.exports = {
	
	get: function(req, res) {
		
		var callback = function(err, hash) {
			if(err != null)
				throw(err)
		
			console.log('/setUrl with hash = ' + hash)
			res.send('/setUrl with hash = ' + hash)
		}
		
		const LinkGenerator = require('./../lib/linkGenerator.js')
		let linkGen = new LinkGenerator();
		
		var url = req.params.url
		app = linkGen.generate(url, callback)
		
	}
	
}

