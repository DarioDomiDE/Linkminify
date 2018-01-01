var env = process.env.NODE_ENV;
if(env === undefined)
	env = 'production'
var config = require('./../config/'+env+'.env')

module.exports = {

	getConfig: function() {
		return config
	}

}