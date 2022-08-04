const express = require('express');
const router = express.Router();
const user = require('./models/users.js');
// routers by page

router.get('/', (req, res) => {
    res.render('index')

});



router.get('/reviews', (req, res) => {
    res.render('reviews')

});

router.get('/showcase', (req, res) => {
    res.render('showcase')

});


// need profile{a template that dynamically loads user content}, news, login page

router.post('/submitCreds',(req, res) => {
    const user = new user({
        userName: req.body.userName,
        password: req.body.password
        
    });

    user.collection.insertOne(user)
        .then(result =>{
            res.render('index')
        })
        .catch(err => console.log(err))
});
module.exports = router;