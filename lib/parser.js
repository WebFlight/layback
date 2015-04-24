
var parser = {

    /**
     * To-Do
     * @param  {[type]}   data     [description]
     * @param  {Function} callback [description]
     * @return {[type]}            [description]
     */
    swagger: function(data, callback) {
        var parsedData;

        if (typeof (data) !== "object" ) {
            try {
                parsedData = JSON.parse(data);
            } catch(err) {
                return callback(err.message);
            }
        } else {
            parsedData = data;
        }

        return callback(null, parsedData);
    }
};

module.exports = parser;
