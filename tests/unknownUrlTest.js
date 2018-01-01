var chai = require('chai');
//var expect = chai.expect;
var assert = require('assert');

var unknownUrlDomain = require('./../domain/unknownUrl');

describe('UnknownUrl', function() {
    it('check if url is redirect-able', function(done) {
        var TEST_DATA = {
            miniUrl: 'wyr9(8',
            realUrl: 'http://www.game-codi.ng/games'
        }
        unknownUrl = new unknownUrlDomain()
        unknownUrl.handle(TEST_DATA.miniUrl)
            .then(data => {
                assert(data.realUrl === TEST_DATA.realUrl, 'data has the expected value')
                done()
            })
            .catch(err => {
                console.log(err)
            })
    })
})