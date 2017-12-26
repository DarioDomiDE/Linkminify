var LinkGenerator = require('./../lib/linkGenerator.js')

module.exports = {
	
	get: function(req, res) {
		
		var callback = function(err, hash) {
			if(err != null)
				throw(err)
		
			console.log('/setUrl with hash = ' + hash)
			res.send('/setUrl with hash = ' + hash)
		}
		
		let linkGen = new LinkGenerator()
		
		var link = "test"
		app = linkGen.generate(link, callback)
	}
	
}

