var assert = require("assert");
var exec = require("child_process").exec;

describe("Validates CLI behavior", function() {

    var capturedStdout;

    before(function(done){
        exec("layback validate ./tests/fixtures/swagger.json http://localhost/:3000", function (error, stdout, stderr) {
            if (error || stderr) { return done(error + stderr); }
            capturedStdout = stdout;
            done();
        });
    });

    it("Should return success message", function() {
        assert.equal(capturedStdout, "Hoera, documentation is valid!\n");
    });
});
