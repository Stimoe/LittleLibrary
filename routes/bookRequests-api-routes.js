var db = require("../models");

module.exports = function(app) {
    app.get("/api/bookRequests", function(req, res) {
        // Here we add an "include" property to our options in our findAll query
        // We set the value to an array of the models we want to include in a left outer join
        // In this case, just db.Post
        db.bookRequest.findAll({
            // include: [db.Post]
        }).then(function() {
            res.json(dbbookRequests);
        });
    });

    app.get("/api/bookRequests/:id", function(req, res) {
        // Here we add an "include" property to our options in our findOne query
        // We set the value to an array of the models we want to include in a left outer join
        // In this case, just db.Post
        db.bookRequest.findOne({
            where: {
                id: req.params.id
            }
            // include: [db.Post]
        }).then(function(dbbookRequests) {
            res.json(dbbookRequests);
        });
    });

    app.post("/api/bookRequests", function(req, res) {
        db.bookRequest.create(req.body).then(function(dbbookRequests) {
            res.json(dbbookRequests);
        });
    });

    app.delete("/api/bookRequests/:id", function(req, res) {
        db.bookRequest.destroy({
            where: {
                id: req.params.id
            }
        }).then(function(dbbookRequests) {
            res.json(dbbookRequests);
        });
    });

};