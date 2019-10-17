// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
var path = require("path");
const bcrypt = require('bcrypt');
var flash = require('connect-flash');
var db = require("../models");
// Routes
// =============================================================
module.exports = function(app) {
    app.use(flash());
    // Each of the below routes just handles the HTML page that the user gets sent to.

    app.get("/", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/index.html"));
    });
    
    // cms route loads library.html
    app.get("/library", function(req, res) {
        if(req.session.user) {
            res.sendFile(path.join(__dirname, "../public/library.html"));
        }else{
            res.flash("Please login");
            res.redirect("/");
        }
    });    
    app.get("/search", function(req, res) {
        if(req.session.user) {
            res.sendFile(path.join(__dirname, "../public/search.html"));
        }else{
            res.flash("Please login");
            res.redirect("/");
        }
    });
    app.get("/profile", function(req, res) {
        if(req.session.user) {
            res.sendFile(path.join(__dirname, "../public/profile.html"));
        }else{
            res.flash("Please login");
            res.redirect("/");
        }
    });
}
