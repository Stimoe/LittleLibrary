var db = require("../models");

module.exports = function(app) {
    app.get("/api/libraries", function(req, res) {
        // Here we add an "include" property to our options in our findAll query
        // We set the value to an array of the models we want to include in a left outer join
        // In this case, just db.Post
        db.library.findAll({
            // include: [db.Post]
        }).then(function(dblibraries) {
            res.json(dblibraries);
        });
    });

    app.get("/api/libraries/:id", function(req, res) {
        // Here we add an "include" property to our options in our findOne query
        // We set the value to an array of the models we want to include in a left outer join
        // In this case, just db.Post
        db.library.findOne({
            where: {
                id: req.params.id
            }
            // include: [db.Post]
        }).then(function(dblibraries) {
            res.json(dblibraries);
        });
    });

    app.post("/api/libraries", function(req, res) {
        db.library.create(req.body).then(function(dblibraries) {
            res.json(dblibraries);
        });
    });

    app.delete("/api/libraries/:id", function(req, res) {
        db.library.destroy({
            where: {
                id: req.params.id
            }
        }).then(function(dblibraries) {
            res.json(dblibraries);
        });
    });

};