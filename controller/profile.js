const router = require('express').Router();


router.get("/profile", (req, res) => {
    /*res.json({
      error: null,
      data: {
    
       // content: "dashboard content",
        userName: req.user,
      },
    });*/

   res.render('profile', 
                {
                    userName: req.userName
                }); // pass relevant stuff to ejs
    
  });
  // def need this
  module.exports = router;