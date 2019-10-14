var db = require("../models");

module.exports = function(app) {
  app.get("/api/users", function(req, res) {
    // Here we add an "include" property to our options in our findAll query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.Post
    db.user
      .findAll({
        // include: [db.Post]
      })
      .then(function(dbusers) {
        res.json(dbusers);
      });
  });

  app.get("/api/users/:id", function(req, res) {
    // Here we add an "include" property to our options in our findOne query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.Post
    db.user
      .findOne({
        where: {
          id: req.params.id
        }
        // include: [db.Post]
      })
      .then(function(dbusers) {
        res.json(dbusers);
      });
  });

  app.post("/api/users", function(req, res) {
    console.log(req.body);
    db.user.create(req.body).then(function(dbusers) {
      res.json(dbusers);
    });
  });

  app.delete("/api/users/:id", function(req, res) {
    db.user
      .destroy({
        where: {
          id: req.params.id
        }
      })
      .then(function(dbusers) {
        res.json(dbusers);
      });
  });
};
