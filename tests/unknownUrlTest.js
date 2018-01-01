var chai = require('chai');
//var expect = chai.expect;
var assert = require('assert');

var unknownUrlDomain = require('./../domain/unknownUrl');

describe('UnknownUrl', function() {
    it('check if url is redirect-able', function() {
        var TEST_DATA = {
            miniUrl: 'wyr9(8',
            realUrl: 'http://www.game-codi.ng/games'
        }

        var catch2 = function() {
            console.log('error2')
            assert(false)
        }

        console.log("test")
        unknownUrl = new unknownUrlDomain()
        unknownUrl.handle(TEST_DATA.miniUrl)
            .then(data => {
                console.log("data")
                console.log(data)
                assert(data == data.realUrl)
                done()
            })
            .catch(err => {
            console.log('error1')
                console.log(err)
                assert(false)
            })
            .catch(catch2)
            .catch(
                assert(false)
            )
            
            //.catch(
            //    console.log("test3")
            //    assert(false)
                //assert(true)
                //assert(3 !== 4, 'not same ')
                //assert(3 === 4, 'not same ')
                //assert.notEqual(3, 4, 'these numbers are not equal')
                //assert(err.length == 1)
                //assert(err.error == 'DATA_DOES_NOT_EXISTS')
                //done()
           // )
    })

    //it('Return 404 with DATA_DOES_NOT_EXISTS if wrong url submitted', function() {
    //})
})