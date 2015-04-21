
var parser = {
	/**
	 * Sum 2 int's
	 * @param  {int} a int
	 * @param  {int} b int
	 * @return {int}   Sum of ints
	 */
	sum: function(a, b) {
		var sum = a + b;
		return sum;
	},

	/**
	 * To-Do
	 * @param  {[type]}   data     [description]
	 * @param  {Function} callback [description]
	 * @return {[type]}            [description]
	 */
	swagger: function(data, callback) {
		return callback(null, "Hoera, documentation is valid!");
	}
};

module.exports = parser;
