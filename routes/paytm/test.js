const checksum = require('../../paytm/checksum/checksum')
const express = require('express');
const router = express.Router();
const config = require('config')
const KEY = config.get('KEY');
// const port = 5500

// module.exports=(app)=>{
    router.post('/',(req,res)=>{
        console.log('submited')
        // res.redirect('http://localhost:3000')

        var paramlist = req.body;
        console.log(JSON.stringify(paramlist))
        

        if(checksum.verifychecksum(paramlist, KEY))
        {
            console.log("true");
            console.log(paramlist);
            res.redirect('https://syed-expert.herokuapp.com')
            // location.replace('http://localhost:3000')
            // res.render('response.ejs',{ 'restdata' : "true" ,'paramlist' : paramlist});
        }else        {
            console.log("false");
            // location.replace('http://localhost:3000')
            res.redirect('https://syed-expert.herokuapp.com')
            // res.redirect('http://localhost:3000')
            // res.render('response.ejs',{ 'restdata' : "false" , 'paramlist' : paramlist});
        };

    })
// }
module.exports = router;