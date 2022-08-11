const express = require('express');
const router = express.Router();
// model for user profile
const User = require('../models/user');
const ShowCase = require('../models/showcase');
const Review = require('../models/reviews');
const Comment = require('../models/comment');
// authentication
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
// validation
const { registerValidation, loginValidation } = require("../validation.js");
// model for reviews
// const Reviews = require('../models/reviews');
// route for home page

// HOME PAGE
router.get('/', (req, res) => {
    res.render('index');
});
// LOGIN PAGE
router.get('/login', (req, res) => {
    res.render('login');
});

router.get('/register', (req, res) => {
  res.render('register');
})
// CREATING USER
router.post("/createUser", async (req, res) => {
  // validate the user
  const { error } = registerValidation(req.body);

  // throw validation errors
  if (error) return res.status(400).json({ error: error.details[0].message });

  const isEmailExist = await User.findOne({ email: req.body.email });

  // throw error when email already registered
  if (isEmailExist)
    return res.status(400).json({ error: "Email already exists" });

  // hash the password
  const salt = await bcrypt.genSalt(10);
  const password = await bcrypt.hash(req.body.password, salt);

  const contact = new User ({
    email: req.body.email,
    userName: req.body.userName,
    password
});

  try {

    User.collection.insertOne(contact)
    .then(result => {
        res.render('index')
    })
    .catch(err => console.log(err));

    /*const savedUser = await user.save();
    res.json({ error: null, data: { userId: savedUser._id } });
    */
  } catch (error) {
    res.status(400).json({ error });
  }
});

//LOGGIN IN
router.post("/login", async (req, res) => {
  // validate the user
  const { error } = loginValidation(req.body);

  // throw validation errors
  if (error) return res.status(400).json({ error: error.details[0].message });

  const user = await User.findOne({ email: req.body.email });

  // throw error when email is wrong
  if (!user) return res.status(400).json({ error: "Email is wrong" });

  // check for password correctness
  const validPassword = await bcrypt.compare(req.body.password, user.password);
  if (!validPassword)
    return res.status(400).json({ error: "Password is wrong" });

  // create token
  const token = jwt.sign(
    // payload data
    {
      userName: user.userName
    },
    process.env.TOKEN_SECRET
  );

  res.header("auth-token", token).json({
    error: null,
    data: {
      token,
    },
  });
});





router.get('/news', (req, res) => {
    res.render('news');
});

router.get('/showcase', (req, res) => {
    res.render('showcase');
});

router.get('/reviews', (req, res) => {
    res.render('reviews');
});


// display current reviews for review page
// router.get('/reviews', (req, res) => {
//     Reviews.find()
//         .then(results => {
//             res.render('reviews', 
//                     {
//                         // passing data at hand to the render
//                         userInfo: userInfo,
//                         reviews: results, 
//                         /* place this into relevant ejs
//                          <% for (let r of reviews) { %>
//                             html composing review post
//                             ........
//                             <% } %>  */
//                     });
// });


//THE ONE
//router.post('/createUser', (req, res) => {
//    const contact = new User ({
//        email: req.body.email,
//        userName: req.body.userName,
//        password: req.body.password
 //   });
//
  //  User.collection.insertOne(contact)
    //.then(result => {
      //  res.render('index')
   // })
   // .catch(err => console.log(err));
//})

router.post('/makePost', (req,res) => {
    const post = new Review({
        //may need to code for blank input fields
        title: req.body.title,
        author: req.body.author,
        imgLink: req.body.imgLink,
        extLink: req.body.extLink,
        opinion: req.body.opinion
    });

    Review.collection.insertOne(post)
    .then(result => {
        //code to dynamically render orignal page (i.e. profile or reviews)
        res.render('reviews')
    })
    .catch(err => console.log(err));
})

/*
router.post('/submitCreds', (req,res) => {
    User.findOne( {userName: req.body.userName}, function(err,doc){
        if(doc==null){
            newUser = 'fail';
            res.render
        }
    })
})
*/

//save for reference, destroy later
// router.post('/submitCreds', (req,res) => {
//     User.findOne( {email: req.body.email}, function(err,doc){
//         if(doc==null) {
//             newUser = 'fail';
//             res.render('index', {userInfo: userInfo, status: userExisted, register: newUser, checkPassword: wrongPassword});
//             newUser = 'pass';
//         }

//         else {
//             User.findOne({email: req.body.email, password:req.body.password}, function(err, doc) {
//                 if(doc==null) {
//                     wrongPassword = 'fail';
//                     res.render('index', {userInfo: userInfo, status: userExisted, register: newUser, checkPassword: wrongPassword});
//                     wrongPassowrd = 'pass';
//                 }
//                 else {
//                     userInfo = doc;
//                     res.render('index', {userInfo: userInfo, status: userExisted, register: newUser, checkPassword: wrongPassword});
//                 }
//             })
//         }
//     })
// });  

module.exports = router; 