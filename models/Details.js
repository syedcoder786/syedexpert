const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create Schema
const DetailSchema = new Schema({
    post_id: {
        type:String,
        required:true
    },
    email: {
        type:String,
        required:true
    },
    password: {
        type:String,
        required:true
    },
    selling_rate: {
        type:String,
        required:true
    },
    date: {
        type:Date,
        default:Date.now
    }

})

module.exports = Detail = mongoose.model('Detail', DetailSchema);