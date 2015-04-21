var validator = require("validator");
var fs = require("fs");
var parse = require("./parser.js");

var layback = {

    /**
     * Validate swagger documentation against a live API
     * @param  {string}   path     Path to swagger.json.
     * @param  {string}   host     URL to API.
     * @param  {Function} callback Result or error if any.
     * @return {string}            Result or error if any.
     */
    validate: function(path, host, callback) {
        if(validator.isNull(path)) { return callback("Path is not set."); }
        if(!validator.isURL(host)) { return callback("Host is not a URL."); }

        layback.getSwaggerSource(path, callback);
    },

    /**
     * Reading swagger.json file and passing content on to the parser.
     * @param  {string}   path     Path to swagger.json.
     * @param  {Function} callback Result or error if any.
     * @return {}            Result or error if any.
     */
    getSwaggerSource: function(path, callback) {
        fs.readFile(path, "utf8", function (err, data) {
            if (err) { return callback(err); }
            parse.swagger(data, callback);
        });
    }
};

module.exports = layback;
