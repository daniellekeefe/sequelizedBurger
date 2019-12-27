// *********************************************************************************
// The initial starting point for our good burger app...
// *********************************************************************************

// Dependencies
// =============================================================
let express = require("express");
let bodyParser = require("body-parser");

// Set up Express
// =============================================================
let app = express();
let PORT = process.env.PORT || 8080;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Static directory
app.use(express.static("public"));

// Set Handlebars.
let exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Routes
// =============================================================
let routes = require("./controllers/burgers_controller.js")
app.use(routes);

// Start the server
// =============================================================
app.listen(PORT, function() {
    console.log("Server listening on: http://localhost:" + PORT);
});