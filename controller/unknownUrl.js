

//module.exports = function handle(req, res) {
	//RouteHandler.on('unknownUrl', handleUrl)
	//var handleUrl = function(url) {		
	//}
		//res.writeHead(200)
	//	res.end('Url is: ' + url)
//}



class UnknownUrl {
	constructor() {
		console.log("constructor")
		//RouteHandler.on('unknownUrl', handleUrl)
	}
	
	handle(res, req) {		
		res.writeHead(200)
		res.end('Url is: ' + url)
	}
	
}