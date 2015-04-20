var assert = require("assert");
var validate = require("../../lib/validator.js");

var path = "../fixtures/swagger.json";
var host = "http://localhost/:3000";

describe("Validates the validator", function() {
    describe("Validates the success path", function() {
        it("Should return success message", function() {
            validate.documentation(path, host, function(err, result) {
                assert.ifError(err);
                assert.equal(result, "Hoera, documentation is valid!");
            });
        });
    }),
    describe("Validates error handling", function() {
        it("Should return error when path is empty.", function() {
            validate.documentation(null, host, function(err, result) {
                assert.ifError(result);
                assert.equal(err, "Path is not set.");
            });
        });
    });
});
