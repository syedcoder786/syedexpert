const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create Schema
const FbUserSchema = new Schema({
    name: {
        type:String,
        required:true
    },
    email: {
        type:String,
        required:true
    },
    Date: {
        type:Date,
        default:Date.now

    }
})

module.exports = FbUser = mongoose.model('fbuser', FbUserSchema);