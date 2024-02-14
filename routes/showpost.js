const express = require('express');
const router = express.Router();
const Post = require('../models/Posts');
// const auth = require('../middleware/auth')


router.get('/', (req,res) => {
    Post.find()
        // .sort({ date: -1 })
        .then(posts=>{
            res.json(posts)
        })
        // .then(showpost=>{
        //     return JSON.stringify(showpost);
        // })

})

module.exports = router;