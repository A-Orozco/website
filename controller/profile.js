const express = require('express');
const router = express.Router();

router.get("/profile", (req, res) => {
    res.json({
      error: null,
      data: {
        title: "My dashboard",
        content: "dashboard content",
        user: req.user,
      },
    });

    res.render('profile', 
                {
                    userName: req.user
                }); // pass relevant stuff to ejs
  });