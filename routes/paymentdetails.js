const express = require('express');
const router = express.Router();
const PaymentDetails = require('../models/PaymentDetails');


router.post('/', (req,res) => {
    const { orderID, name, price } = req.body
    console.log(req.body.orderID)
    console.log(req.body.name)
    console.log(req.body.price)

    const newPayment = new PaymentDetails({
        orderID,
        name,
        price
    });

    newPayment.save()
        .then(paydetail=>{
            console.log(paydetail)
            res.json(paydetail)
        })
        // .then(showpost=>{
        //     return JSON.stringify(showpost);
        // })

})

module.exports = router;