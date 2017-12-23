
//var processResponse2 = require('./response2.js')
//module.exports = {
	//count: 10 // public singleton
//}
module.exports = function listUrls(req, res) {
	//callTwo({...}, processResponse2)
	//res.writeHead(200);
	console.log('/listUrls');
   res.send('READ DB and show a list of URLs here')
}