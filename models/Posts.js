const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create Schema
const PostSchema = new Schema({
    img_path: {
        type:String,
        required:true
    },
    bp_coins: {
        type:String,
        required:true
    },
    selling_rate: {
        type:String,
        required:true
    },
    in_stock: {
        type:Number,
        required:true
    }
})

module.exports = Post = mongoose.model('post', PostSchema);