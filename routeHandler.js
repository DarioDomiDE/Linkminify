const EventEmitter = require('events').EventEmitter
var utils = require('./utils')

class RouteHandler extends EventEmitter {
		
	constructor() {
		super()
		//var UnknownUrl = require('./controller/unknownUrl.js')
		//var uu = new UnknownUrl();
	}
  
	handle(app) {
		var that = this
			
		app.post('/:url', function (req, res) {
			handleUrls(req, res)
		})
		
		app.get('/:url', function (req, res) {
			handleUrls(req, res)
		})
		
		var handleUrls = function(req, res)
		{
			var url = req.params.url
			var controller = urlHasController(url)
			if(!controller) {
				// TODO
				//that.emit('unknownUrl', url)
				//unknownUrl.handle(req, res)
				res.writeHead(200)
				res.end('Url is: ' + url)
			} else {
				try {
					switch(req.method)
					{
						case 'GET':
							controller.get(req, res)
							break
						case 'POST':
							controller.post(req, res)
							break
						case 'PUT':
							controller.put(req, res)
							break
						case 'DELETE':
							controller.delete(req, res)
							break
						default:
						throw404(req, res, e)
					}
				} catch(e) {
					throw404(req, res, e)
				}
			}
		}
		
		var urlHasController = function(url) {
			if(!utils.string.onlyLettersAndDigits(url))
				return false
			try {
				// check if module exists in controller folder
				var module = require('./controller/'+url+'.js')
			} catch(e) {
				return false
			}
			return module
		}
		
		var throw404 = function(req, res, e) {
			var url = req.params.url
			console.log("throw 404 error at " + url)
			console.log(e)
			res.writeHead(404)
			res.end()
        }

	
		return app
	}
}
	
// TODO move to separate files ->
/*
app.post('/addUrl', function (req, res) {
	console.log('/addUrl');
	var data = {"realUrl": "www.game.codi.ng"}
	// TODO insert data to DB
	res.writeHead(200);
	res.end();
})

app.delete('/deleteUrl', function (req, res) {
	console.log('/deleteUrl');
	// TODO delete data to DB
	res.writeHead(200);
	res.end();
})

// This responds a DELETE request for the /del_user page.
app.delete('/del_user', function (req, res) {
   console.log("Got a DELETE request for /del_user")
   res.send('Hello DELETE')
})*/
	


module.exports = RouteHandler;