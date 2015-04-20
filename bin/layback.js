#!/usr/bin/env node
/*eslint no-console:0*/

var program = require("commander");
var validate = require("../lib/validator.js");

program
    .version("0.0.1")
    .command("validate <path> <host>")
    .alias("val")
    .description("Validate swagger documentation. Pass path to swagger.json and Url to the API.")
    .action(function(path, host){
        validate.documentation(path, host, function(err, result) {
            if(err) { return console.log(err); }
            return console.log(result);
        });
    });

program.on("--help", function() {
    console.log("  Examples:");
    console.log();
    console.log("    $ layback validate ./swagger.json http://localhost/:3000");
    console.log();
  });

program.parse(process.argv);
