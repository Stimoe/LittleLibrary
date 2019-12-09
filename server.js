// *****************************************************************************
// Server.js - This file is the initial starting point for the Node/Express server.
//
// ******************************************************************************
// *** Dependencies
// =============================================================
var express = require("express");
require('dotenv').config();

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 8080;

// Requiring our models for syncing
var db = require("./models");
var session = require("express-session");


// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static directory
app.use(express.static("public"));
app.use(session({ secret: process.env.SESSION_SECRET, resave: true, saveUninitialized: true }));
console.log(process.env.SESSION_SECRET)

// Set Handlebars.
// var exphbs = require("express-handlebars");

// app.engine("handlebars", exphbs({ defaultLayout: "main" }));
// app.set("view engine", "handlebars");

// Routes
// =============================================================
require("./routes/libraries-api-routes.js")(app);
require("./routes/books-api-routes.js")(app);
require("./routes/bookRequests-api-routes.js")(app);
require("./routes/maps-api-routes.js")(app);
require("./routes/user-api-routes.js")(app);
require("./routes/reviews-api-routes.js")(app);
require("./routes/userLibrary-api-routes.js")(app);
require("./routes/html-routes.js")(app);

// Syncing our sequelize models and then starting our Express app
// =============================================================
db.sequelize.sync({ force: false }).then(function() {
    app.listen(PORT, function() {
        console.log("App listening on PORT " + PORT);
    });
});