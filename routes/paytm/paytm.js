const checksum_lib = require('../../paytm/checksum/checksum')
const uuid = require('uuid-random');
const express = require('express');
const router = express.Router();
const config = require('config')
const MID = config.get('MID');
const auth = require('../../middleware/auth')
// const port = 5500

// module.exports=(app)=>{
    router.post('/',auth,(req,res)=>{
        const {selling_rate} = req.body
        console.log(selling_rate)
        const orderid = uuid();

        let params ={}
        params['MID'] = MID,
        params['WEBSITE'] = 'WEBSTAGING',
        params['CHANNEL_ID'] = 'WEB',
        params['INDUSTRY_TYPE_ID'] = 'Retail',
        params['ORDER_ID'] = 'ORD'+orderid,
        params['CUST_ID'] = 'CUST'+uuid(),
        params['TXN_AMOUNT'] = selling_rate,
        // params['CALLBACK_URL'] = 'http://localhost:5000/test'
        params['CALLBACK_URL'] = 'https://syed-expert.herokuapp.com/test',
        // params['CALLBACK_URL'] = 'https://securegw.paytm.in/theia/paytmCallback?ORDER_ID='+orderid,
        // params['EMAIL'] = 'jamesryder786@gmail.com',
        params['MOBILE_NO'] = '9123456789'

        checksum_lib.genchecksum(params,'GR5x7HQBjQg&%1Zp',function(err,checksum){
            if(err){
                console.log(err)
            }
            console.log(checksum)
            let txn_url = " https://securegw.paytm.in/order/process"

            let form_fields = ""
            for(x in params)
            {
                form_fields += "<input type='hidden' name='"+x+"' value='"+params[x]+"'/>"

            }

            form_fields+="<input type='hidden' name='CHECKSUMHASH' value='"+checksum+"' />"

            var html = '<form method="post" action="'+txn_url+'" name="f1">'+form_fields +'</form>'
            // res.writeHead(200,{'Content-Type' : 'text/html'})
            // res.write(html)
            // res.end()
            res.json({msg:html})
        })
    })
// }
module.exports = router;