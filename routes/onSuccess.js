const express = require('express');
const router = express.Router();
const Detail = require('../models/Details');
const Post = require('../models/Posts');


router.post('/', (req,res) => {
    console.log(req.body.post_id)
    Post.findById(req.body.post_id)
    .then(post => {
        var stock = post.in_stock - 1;
        console.log(stock)
        if(stock >= 0){
        Post.findOneAndUpdate({_id:req.body.post_id},{in_stock:stock}, (err) => {
            console.log(err)
        })}
        Detail.find({post_id:req.body.post_id})
        .sort({date: -1})
        .then(details=>{
            console.log(details[0])
            Detail.remove({_id:details[0]._id}).exec()
            res.json(details[0])
        })
    })
    
        // .then(showpost=>{
        //     return JSON.stringify(showpost);
        // })

})

module.exports = router;