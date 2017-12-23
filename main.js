var express = require('express'),
	app = express();

//var listUrls = require('./controller/listUrls.js')
//app.get('/listUrls', listUrls)
var util = require('./util')

app.get('/:url', function (req, res) {
	
	var url = req.params.url
	if(!util.string.onlyLettersAndDigits(url)) {
		matchUrl(req, res)
		return
	}
	
	// check if module exists in controller folder
	try {
		var module = require('./controller/'+url+'.js')
	} catch(e) {
		matchUrl(req, res)
		return
	}
	module(req, res)
})

var matchUrl = function(req, res) {

	// getRealUrl
	var url = req.params.url
	res.writeHead(200);
	var url = req.params.url
	res.end('Url is: ' + url)
}


// TODO move to separate files ->

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
})

var server = app.listen(80, function () {
   var host = server.address().address
   var port = server.address().port
   console.log("Linkminify listening to http://%s:%s", host, port)
})
