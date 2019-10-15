var db = require("../models");
var bcrypt = require('bcrypt');
var path = require('path');
var flash = require('connect-flash');


module.exports = function(app) {
app.use(flash());
app.post("/login", function(req,res) {
  console.log("this is",req.body);
  db.user.findOne({
    where:{
      email:req.body.email
    }}).then(function(dbUser){
      console.log(dbUser)
      //compares password send in req.body to one in database, will return true if matched.
      if(bcrypt.compareSync(req.body.password,dbUser.password)) {
      //create new session property "user", set equal to logged in user
      req.session.user = dbUser
      res.redirect("/search")
      
  }
  else {
      //delete existing user, add error
      req.session.user= false;
      req.session.error = "Username and/or Password is incorrect."
      
      res.json(req.session);
    }
  }).catch(err=>console.log(err))
});
// index route loads searchPage
app.get("/search", function(req, res) {
  if(req.session.user) {
      res.sendFile(path.join(__dirname, "../public/search.html"));
  }else{
      res.redirect("/");
  }
});
app.get("/api/users", function(req, res) {
  // Here we add an "include" property to our options in our findAll query
  // We set the value to an array of the models we want to include in a left outer join
  // In this case, just db.Post
  db.user
    .findAll({
      // include: [db.Post]
    })
    .then(function(dbusers) {
      res.redirect("/search")
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
