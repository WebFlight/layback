#!/usr/bin/env node

var program = require("commander");

program
  .version("0.0.1")
  .command("validate <path> <host>")
  .alias("val")
  .description("Validate swagger documentation. Pass path to swagger.json and Url to the API.")
  .action(function(path, host){
    console.log(path + " " + host);
  });

program.on('--help', function() {
    console.log('  Examples:');
    console.log();
    console.log('    $ sleeper validate ./swagger.json http://localhost/:3000');
    console.log();
  });

program.parse(process.argv);