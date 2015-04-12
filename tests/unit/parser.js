var assert = require("assert");
var parser = require("../../lib/parser.js");

describe("Validates the swagger.json parser", function() {
    it("Should return 4", function() {
        var total = parser.sum(2, 2);
        assert.equal(total, 4);
    });
});
