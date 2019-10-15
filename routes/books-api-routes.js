var db = require("../models");

module.exports = function(app) {
    app.get("/api/books", function(req, res) {
        db.book.findAll({
            // include: [db.Post]
        }).then(function() {
            res.json(dbbooks);
        });
    });

    app.get("/api/books/:id", function(req, res) {
        db.book.findOne({
            where: {
                id: req.params.id
            }
            // include: [db.Post]
        }).then(function(dbbooks) {
            res.json(dbbooks);
        });
    });
    //find books based on title
    app.get("/api/booksTitle/:title", function(req, res) {
        db.book.findAll({
            where: {
                title: req.params.title,
                availability: true
            }
            // include: [db.Post]
        }).then(function(dbbooks) {
            res.json(dbbooks);
        });
    });
    //find books based on genre
    app.get("/api/booksGenre/:genre", function(req, res) {
        db.book.findAll({
            where: {
                genre: req.params.genre,
                availability: true
            }
            // include: [db.Post]
        }).then(function(dbbooks) {
            res.json(dbbooks);
        });
    });
    app.get("/api/booksAuthor/:author", function(req, res) {
        db.book.findAll({
            where: {
                author: req.params.author,
                availability: true
            }
            // include: [db.Post]
        }).then(function(dbbooks) {
            res.json(dbbooks);
        });
    });

    app.get("/api/booksLibrary/:libraryId", function(req, res) {
        db.book.findAll({
            where: {
                libraryId: req.params.libraryId,
                availability: true
            }
            // include: [db.Post]
        }).then(function(dbbooks) {
            res.json(dbbooks);
        });
    });

    app.get("/api/booksUser/:userId", function(req, res) {
        db.book.findAll({
            where: {
                userId: req.params.userId,
                availability: false
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


    app.put("/api/books", function(req, res) {
        db.book.update(
            req.body, {
                where: {
                    id: req.body.id
                }
            }).then(function(dbbook) {
            res.json(dbbook);
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