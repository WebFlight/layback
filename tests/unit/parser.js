var assert = require("assert");
var parser = require("../../lib/parser.js");

var stringData = "string";
var objectData = {"swagger": "2.0", "paths": "description"};

/*eslint no-unused-expressions:0 */
/*eslint no-sequences:0 */
/*eslint no-underscore-dangle:0 */
/*eslint no-shadow:0 */

describe("Validates the swagger.json parser", function() {
    describe("success path", function() {
        it("Should return a JSON object", function() {
            parser.swagger(objectData, function(err, result) {
                assert.ifError(err);
                assert.equal(result, objectData);
            });
        });
    }),
    describe("error handeling", function() {
        it("Should return an error when no parsable string is passed to parser", function() {
            parser.swagger(stringData, function(err, result) {
                assert.ifError(result);
                assert.equal(err, "Unexpected token s");
            });
        });
    });
});
