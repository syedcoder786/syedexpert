const express = require('express');
const router = express.Router();
const Detail = require('../models/Details');
// const auth = require('../middleware/auth')


router.post('/',  (req,res) => {
    const {post_id, email, password, selling_rate} = req.body;

    if(!post_id || !email || !password || !selling_rate){
        return res.status(400).json({ msg: 'Please enter all fields' })
    }

    const newDetail = new Detail({
        post_id, 
        email, 
        password, 
        selling_rate
    });

    newDetail.save()
        .then(account => {
            res.json(account)
        })

})

module.exports = router;