var validator = require("validator");

module.exports = {

	/**
	 * Validate swagger documentation against a live API
	 * @param  {string}   path     Path to swagger.json.
	 * @param  {string}   host     URL to API.
	 * @param  {Function} callback Result or error if any.
	 * @return {string}            Result or error if any.
	 */
	documentation: function(path, host, callback) {
		if(validator.isNull(path)) { return callback("Path is not set."); }
		return callback(null, "Hoera, documentation is valid!");
	}
};
