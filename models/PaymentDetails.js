const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create Schema
const PaymentDetailsSchema = new Schema({
    orderID: {
        type:String,
        required:true
    },
    name: {
        type:String,
        required:true
    },
    price: {
        type:String,
        required:true
    },
    date: {
        type:Date,
        default:Date.now
    }
})

module.exports = PaymentDetails = mongoose.model('paymentdetail', PaymentDetailsSchema);