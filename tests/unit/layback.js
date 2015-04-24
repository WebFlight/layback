var assert = require("assert");
var rewire = require("rewire");
var layback = rewire("../../lib/layback.js");

var path = "../fixtures/swagger.json";
var host = "http://localhost/:3000";

var swaggerObejct = {"swagger": "is da bom"};

/*eslint no-unused-expressions:0 */
/*eslint no-sequences:0 */
/*eslint no-underscore-dangle:0 */
/*eslint no-shadow:0 */

describe("Validates the validator", function() {
    describe("success path", function() {
        before( function() {
            layback.__set__({fs: {
                readFile: function (path, encoding, cb) {
                    assert.equal(path, "../fixtures/swagger.json");
                    cb(null, swaggerObejct);
                }
            }});
        });
        it("Should return success message", function() {
            layback.validate(path, host, function(err, result) {
                assert.ifError(err);
                assert.equal(result, swaggerObejct);
            });
        });
    }),
    describe("error handling", function() {
        before( function() {
            layback.__set__({fs: {
                readFile: function (path, encoding, cb) {
                    assert.equal(path, "../fixtures/swagger.json");
                    cb("File not found!");
                }
            }});
        });
        it("Should return error when path is empty.", function() {
            layback.validate(null, host, function(err, result) {
                assert.ifError(result);
                assert.equal(err, "Path is not set.");
            });
        }),
        it("Should return error when host is not a URL.", function() {
            layback.validate(path, "not a url", function(err, result) {
                assert.ifError(result);
                assert.equal(err, "Host is not a URL.");
            });
        }),
        it("Should return error when host is null.", function() {
            layback.validate(path, null, function(err, result) {
                assert.ifError(result);
                assert.equal(err, "Host is not a URL.");
            });
        }),
        it("Should return error file can't be found.", function() {
            layback.validate(path, host, function(err, result) {
                assert.ifError(result);
                assert.equal(err, "File not found!");
            });
        });
    });
});
