var db = require("../models");

module.exports = function(app) {
    app.get("/api/books", function(req, res) {
        // Here we add an "include" property to our options in our findAll query
        // We set the value to an array of the models we want to include in a left outer join
        // In this case, just db.Post
        db.book.findAll({
            // include: [db.Post]
        }).then(function() {
            res.json(dbbooks);
        });
    });

    app.get("/api/books/:id", function(req, res) {
        // Here we add an "include" property to our options in our findOne query
        // We set the value to an array of the models we want to include in a left outer join
        // In this case, just db.Post
        db.book.findOne({
            where: {
                id: req.params.id
            }
            // include: [db.Post]
        }).then(function(dbbooks) {
            res.json(dbbooks);
        });
    });

    app.post("/api/books", function(req, res) {
        db.book.create(req.body).then(function(dbbooks) {
            res.json(dbbooks);
        });
    });

    app.delete("/api/books/:id", function(req, res) {
        db.book.destroy({
            where: {
                id: req.params.id
            }
        }).then(function(dbbooks) {
            res.json(dbbooks);
        });
    });

};