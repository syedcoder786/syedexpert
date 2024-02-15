const express = require("express");
const router = express.Router();
const Post = require("../models/Posts");
// const auth = require('../middleware/auth')

router.get("/", (req, res) => {
  console.log("post");

  Post.find()
    // .sort({ date: -1 })
    .then((posts) => {
      // console.log(posts)
      res.json(posts);
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json(err);
    });
  // .then(showpost=>{
  //     return JSON.stringify(showpost);
  // })
});

module.exports = router;
