const express = require('express');
const router = express.Router();
const post = require('./models/post');
const newUser = require('./models/users');
const bodyParser = require("body-parser");
const newsArt = require('./models/article');
const { db } = require('./models/post');
// routers by page

router.get('/', (req, res) => {
    res.render('index')

});

router.get('/news', (req, res) => {
    res.render('news')

});

router.get('/reviews', (req, res) => {
    res.render('reviews')

});

router.get('/showcase', (req, res) => {
    res.render('showcase')

});

router.get('/news', (req, res) => {
    res.render('news')

});

router.get('/profile', (req, res) => {
    res.render('profile')

});

// need profile{a template that dynamically loads user content}, news, login page

router.post('/submitCreds',(req, res) => {
    const user = new newUser({
        userName: req.body.userName,
        password: req.body.password    
    });

    db.users.insertOne(user)
    .then(result =>{
        res.render('index')
    })
    .catch(err => console.log(err));
});




module.exports = router;