const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const router = express.Router();
// model for user profile
const User = require('../models/user.js');
// model for reviews
const Reviews = require('../models/reviews.js');
const { render } = require('ejs');


let userExisted = 'pass';
let newUser = 'pass';
let wrongPassword = 'pass';
let userInfo = null;

// route for home page

router.get('/', (req, res) => {
    res.render('index', {userInfo: userInfo, status: userExisted, register:newUser, checkPassword: wrongPassword});
});

router.get('/login', (req, res) => {
    res.render('login', {userInfo: userInfo, status: userExisted, register:newUser, checkPassword: wrongPassword});
});

router.get('/register', (req, res) => {
    res.render('register', {userInfo: userInfo, status: userExisted, register:newUser, checkPassword: wrongPassword});
});


// display current reviews for review page
router.get('/reviews', (req, res) => {
    Reviews.find()
        .then(results => {
            res.render('reviews', 
                    {
                        // passing data at hand to the render
                        userInfo: userInfo,
                        reviews: results, 
                        /* place this into relevant ejs
                         <% for (let r of reviews) { %>
                            html composing review post
                            ........
                            <% } %>  */
                    });

});

// add router for .get('/reviews/:username)
/*
router.get('/showcase', (req, res) => {
    

});
*/

// need profile{a template that dynamically loads user content}, news, login page
router.post('/createUser', (req, res) => {
    User.findOne( {email: reg.body.email}, function(err, doc) {
        if(doc==null) {
            const user = new User( {
                email: req.body.email,
                password: req.body.password,
                userName: req.body.userName
            });
            User.collection.insertOne(user);
            userInfo = user;
            res.render('index', {userInfo: userInfo, status: userExisted, register: newUser, checkPassword: wrongPassword});
        }
        else {
            userExisted = 'fail';
            res.render('index', {userInfo: userInfo, status: userExisted, register: newUser, checkPassword: wrongPasswprd});
            userExisted = 'pass';
        }

    })
});



 
router.post('/submitCreds', (req,res) => {
    User.findOne( {email: req.body.email}, function(err,doc){
        if(doc==null) {
            newUser = 'fail';
            res.render('index', {userInfo: userInfo, status: userExisted, register: newUser, checkPassword: wrongPassword});
            newUser = 'pass';
        }

        else {
            User.findOne({email: req.body.email, password:req.body.password}, function(err, doc) {
                if(doc==null) {
                    wrongPassword = 'fail';
                    res.render('index', {userInfo: userInfo, status: userExisted, register: newUser, checkPassword: wrongPassword});
                    wrongPassowrd = 'pass';
                }
                else {
                    userInfo = doc;
                    res.render('index', {userInfo: userInfo, status: userExisted, register: newUser, checkPassword: wrongPassword});
                }
            })
        }
    })
});
});  

module.exports = router; 