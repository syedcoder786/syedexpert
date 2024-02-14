const express = require('express');
const router = express.Router();
const Detail = require('../models/Details');


router.get('/', (req,res) => {
    Detail.find()
        .then(details=>{
            res.json(details)
        })
        // .then(showpost=>{
        //     return JSON.stringify(showpost);
        // })

})

module.exports = router;