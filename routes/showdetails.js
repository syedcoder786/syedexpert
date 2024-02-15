const express = require("express");
const router = express.Router();
const Detail = require("../models/Details");

router.get("/", (req, res) => {
  // console.log("test")
  Detail.find()
    .then((details) => {
      // console.log(details)
      res.json(details);
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json(err);
    });
});

module.exports = router;
