var assert = require("assert");
var exec = require("child_process").exec;

describe("Validates CLI behavior", function() {

    var capturedStdout;

    before(function(done){
        exec("sleeper validate ./swagger.json http://localhost/:3000", function (error, stdout, stderr) {
            if (error || stderr) { done(error + stderr); }
            capturedStdout = stdout;
            done();
        });
    });

    it("Should return hallo world", function() {
        assert.equal(capturedStdout, "./swagger.json http://localhost/:3000\n");
    });
});
