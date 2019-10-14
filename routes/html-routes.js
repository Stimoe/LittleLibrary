// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
var path = require("path");
// Routes
// =============================================================
module.exports = function(app) {

    // Each of the below routes just handles the HTML page that the user gets sent to.

    app.get("/", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/index.html"));
    });
    // index route loads serachPage.html
    app.get("/maps", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/searchPage.html"));
    });

    // cms route loads library.html
    app.get("/library", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/library.html"));
    });

    // blog route loads index.html
    app.get("/index", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/index.html"));
    });
    app.get("/user", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/user.html"));
    });

};