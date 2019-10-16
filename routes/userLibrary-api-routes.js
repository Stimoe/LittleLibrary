var db = require("../models");

module.exports = function(app) {
    app.get("/api/userLibraries", function(req, res) {
        // Here we add an "include" property to our options in our findAll query
        // We set the value to an array of the models we want to include in a left outer join
        // In this case, just db.Post
        db.userLibrary.findAll({
            // include: [db.Post]
        }).then(function(dbuserLibraries) {
            res.json(dbuserLibraries);
        });
    });

    app.get("/api/userLibraries/:userId", function(req, res) {
        // Here we add an "include" property to our options in our findOne query
        // We set the value to an array of the models we want to include in a left outer join
        // In this case, just db.Post
        db.userLibrary.findAll({
            where: {
                userId: req.params.userId
            }
            // include: [db.Post]
        }).then(function(dbuserLibraries) {
            res.json(dbuserLibraries);
        });
    });
    app.get("/api/librariesUser/:libraryId", function(req, res) {
        // Here we add an "include" property to our options in our findOne query
        // We set the value to an array of the models we want to include in a left outer join
        // In this case, just db.Post
        db.userLibrary.findAll({
            where: {
                libraryId: req.params.libraryId
            }
            // include: [db.Post]
        }).then(function(dbuserLibraries) {
            res.json(dbuserLibraries);
        });
    });

    app.post("/api/userLibraries", function(req, res) {
        console.log(req.body);
        db.userLibrary.create(req.body).then(function(dbuserLibraries) {
            res.json(dbuserLibraries);
        });
    });

    app.delete("/api/userLibraries/:id", function(req, res) {
        db.userLibrary.destroy({
            where: {
                id: req.params.id
            }
        }).then(function(dbuserLibraries) {
            res.json(dbuserLibraries);
        });
    });

};