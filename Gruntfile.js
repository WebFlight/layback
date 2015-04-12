module.exports = function(grunt) {

    var libraryDirectory = ["./lib/**/*.js"];
    var testsDirectory = ["./tests/**/*.js"];

    require("load-grunt-tasks")(grunt);
    require("time-grunt")(grunt);

    grunt.initConfig({
        jscs: {
            src: libraryDirectory
        },
        jsonlint: {
            all: {
                src: ["./*.json"]
            }
        },
        eslint: {
            target: libraryDirectory
        },
        githooks: {
            all: {
                "pre-commit": "commit"
            }
        },
        mochaTest: {
            test: {
                options: {
                  reporter: "xunit-file",
                  clearRequireCache: true
                },
                src: ["test/**/*.js"]
            }
        },
        mocha_istanbul: {
            src: testsDirectory, // a folder works nicely
            options: {
                mask: "*.js",
                check: {
                    lines: 80,
                    statements: 80,
                    branches: 80,
                    functions: 80
                }
            }
        },
        istanbul_check_coverage: {
            default: {
                options: {
                    coverageFolder: "coverage*" // will check both coverage folders and merge the coverage results
                }
            }
        },
        filenames: {
            options: {
                valid: "dashes"
            },
            src: [libraryDirectory, testsDirectory]
        }
    });

    grunt.event.on("coverage", function(lcovFileContents, done) {
        // Check below
        done();
    });

    var defaultTestSrc = grunt.config("mochaTest.test.src");
    grunt.event.on("watch", function(action, filepath) {
        grunt.config("mochaTest.test.src", defaultTestSrc);
        if (filepath.match("test/")) {
            grunt.config("mochaTest.test.src", filepath);
        }
    });

    grunt.registerTask("default", [
        "commit"
    ]);

    grunt.registerTask("commit", [
        "filenames",
        "eslint",
        "jsonlint",
        "jscs",
        "mocha_istanbul"
    ]);

    grunt.registerTask("test", [
        "mocha_istanbul"
    ]);
};
