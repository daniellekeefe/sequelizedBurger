// Import the ORM to create functions that will interact with the database.
let orm = require("../config/orm.js");

let burger = {
    all: function(cb) {
        orm.selectAll("burgers", function(res) {
            cb(res);
        });
    },
    add: function(val, cb) {
        orm.insertOne("burgers", "burger_name", val, function(res) {
            cb(res);
        });
    },
    update: function(eatenID, cb) {
        orm.updateOne("burgers", "devoured", 1, "id", eatenID, function(res) {
            cb(res);
        });
    }
};

module.exports = burger;