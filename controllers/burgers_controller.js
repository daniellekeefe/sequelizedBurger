let express = require("express");
let router = express.Router();

// Import the model (burger.js) to use its database functions.
let burger = require("../models/burger.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
    burger.all(function(data) {
        let hbsObject = {
            burgers: data
        };
        res.render("index", hbsObject);
    });
});

router.post("/api/burgers", function(req, res) {

    burger.add(req.body.burger_name, function(result) {
        // Send back the ID of the new burger
        res.json({ id: result.insertId });
    });
});

router.put("/api/burgers/:id", function(req, res) {
    burger.update(req.params.id, function(result) {
        res.json(result);
    });
});

// Export routes for server.js to use.
module.exports = router;