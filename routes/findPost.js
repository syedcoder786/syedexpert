const express = require("express");
const router = express.Router();
const Post = require("../models/Posts");
const auth = require("../middleware/auth");

router.post("/", auth, (req, res) => {
  const { id } = req.body;
  // console.log(id)
  Post.findById(id)
    // .sort({ date: -1 })
    .then((post) => {
      // console.log(post)
      if (post) {
        if (post.in_stock !== 0) {
          return res.status(200).json(post);
        } else {
          return res.status(404).json({ err: "Not in stock" });
        }
      }
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
