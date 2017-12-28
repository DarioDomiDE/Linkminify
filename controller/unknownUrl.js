

//module.exports = function handle(req, res) {
	//RouteHandler.on('unknownUrl', handleUrl)
	//var handleUrl = function(url) {		
	//}
		//res.writeHead(200)
	//	res.end('Url is: ' + url)
//}
var db = require('./../db')
var linksDB = db.linksDB.linksDB

class UnknownUrl {
	constructor() {
		console.log("constructor")
		//RouteHandler.on('unknownUrl', handleUrl)
	}
	
	handle(req, res) {		
		//res.writeHead(200)
		//res.end('Url is: ' + url)

		var miniUrl = req.params.url
		//var findmini = realUrl

		// FIND ONE
		var findSuccessful = function(data) {
			console.log('result: ' + data)

			data.accessCount++
			var conditions = {miniUrl: data.miniUrl}
			linksDB.update(conditions, data)

			var finalUrl = data.realUrl
			res.redirect(finalUrl)
			//res.writeHead(301,
 			//{Location: 'http://www.pornhub.com'}
			//);
			res.end()
		}
		var findFailed  = function(err) {
			console.log('buuuuh :( : ' + err)
		}
		linksDB
			.findOne({'miniUrl': miniUrl}, 'realUrl miniUrl accessCount')
			.then(findSuccessful)
			.catch(findFailed)
			


	}
	
}
module.exports = UnknownUrl