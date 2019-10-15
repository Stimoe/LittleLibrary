// var express = require("express");
// var router = express.Router();
// var db = require('../models');
// const bcrypt = require('bcrypt');


// //route for user login
// router.post('/index',function(req,res){
//     db.User.findOne({
//         where:{
//             email:req.body.email
//         }}).then(function(dbUser){
//             //compares password send in req.body to one in database, will return true if matched.
//             if(bcrypt.compareSync(req.body.password,dbUser.password)) {
//                 //create new session property "user", set equal to logged in user
//                 req.user = dbUser
//             }
//             else {
//                 //delete existing user, add error
//                 req.session.user= false;
//                 req.session.error = 'Authorization failed'
//             }
//             res.json(req.session);
//         })
//     })
//     //get route for search page, if logged in will let you in, otherwise will fail
//     router.get('/search',function(req,res){
//         if(req.session.user) {
//             res.render('Securepage',req.session.user);
//         }else {
//             res.send('Please log in first!')
            
//         }
//     })
//     //get route for Library page, if logged in will let you in, otherwise will fail
//     router.get('/library',function(req,res){
//         if(req.session.user) {
//             res.render('Securepage',req.session.user);
//         }else {
//             res.send('Please log in first!')
//         }
//     })
    
//     app.get('/logout',function(req,res){
//     //delete session user, logging you out
//     req.session.destroy(function(){
//         res.send('successfully logged out')
//     })
// })



// module.exports = app;