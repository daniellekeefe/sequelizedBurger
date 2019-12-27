// Import MySQL connection.
let connection;
//If deploying to Heroku, make sure you set up the JAWSDB add-on.
if (process.env.JAWSDB_URL) {
    let connection = require("../config/live-connection.js");
} else {
    let connection = require("../config/connection.js");
}

// Object for all our SQL statement functions.
let orm = {
    selectAll: function(tableInput, cb) {
        let queryString = "SELECT * FROM " + tableInput + ";";
        connection.query(queryString, function(err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },
    insertOne: function(tableInput, colName, value, cb) {
        value = connection.escape(value);
        let queryString = "INSERT INTO " + tableInput + " (" + colName + ") VALUES (" + value + ");";
        connection.query(queryString, function(err, result) {
            if (err) throw err;
            cb(result);
        });
    },
    updateOne: function(tableInput, colName, value, idColName, id, cb) {
        let queryString = "UPDATE " + tableInput + " SET " + colName + " = " + value + " WHERE " + idColName + " = " + id + ";";
        connection.query(queryString, function(err, result) {
            if (err) throw err;
            cb(result);
        });
    }
}

// Export the orm object for the model (burger.js).
module.exports = orm;