var db = require("../models");

module.exports = function(app) {
    app.get("/api/reviews", function(req, res) {
        // Here we add an "include" property to our options in our findAll query
        // We set the value to an array of the models we want to include in a left outer join
        // In this case, just db.Post
        db.review.findAll({
            // include: [db.Post]
        }).then(function(dbreviews) {
            res.json(dbreviews);
        });
    });

    app.get("/api/reviews/:id", function(req, res) {
        // Here we add an "include" property to our options in our findOne query
        // We set the value to an array of the models we want to include in a left outer join
        // In this case, just db.Post
        db.review.findOne({
            where: {
                id: req.params.id
            }
            // include: [db.Post]
        }).then(function(dbreviews) {
            res.json(dbreviews);
        });
    });

    app.post("/api/reviews", function(req, res) {
        console.log(req.body);
        db.review.create(req.body).then(function(dbreviews) {
            res.json(dbreviews);
        });
    });

    app.delete("/api/reviews/:id", function(req, res) {
        db.review.destroy({
            where: {
                id: req.params.id
            }
        }).then(function(dbreviews) {
            res.json(dbreviews);
        });
    });

};