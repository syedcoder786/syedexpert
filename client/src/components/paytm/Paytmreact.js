import React, { Component } from 'react';
// import { Platform } from 'react-native';
import Paytm from 'react-native-paytm';
 
// Data received from PayTM
const paytmConfig = {
    MID: 'PxhiXt53955810104578',
    WEBSITE: 'WEBSTAGING',
    CHANNEL_ID: 'WEB',
    INDUSTRY_TYPE_ID: 'Retail',
    // CALLBACK_URL: 'https://securegw.paytm.in/theia/paytmCallback?ORDER_ID=',
    CALLBACK_URL: '/test'
};
 
class Paytmreact extends Component {
    componentWillMount() {
        Paytm.addListener(Paytm.Events.PAYTM_RESPONSE, this._handlePaytmResponse);
    }
    
    componentWillUnmount() {
        Paytm.removeListener(Paytm.Events.PAYTM_RESPONSE, this._handlePaytmResponse);
    }
    
    _handlePaytmResponse = (resp) => {
        const {STATUS, status, response} = resp;
    
        // this.setState({processing: false, payment_text: ''});
                console.log(JSON.stringify(resp));
      };
    
    runTransaction(amount, customerId, orderId, mobile, email, checkSum) {
        const callbackUrl = `${paytmConfig.CALLBACK_URL}${orderId}`;
        const details = {
            mode: 'Staging', // 'Staging' or 'Production'
            MID: paytmConfig.MID,
            INDUSTRY_TYPE_ID: paytmConfig.INDUSTRY_TYPE_ID,
            WEBSITE: paytmConfig.WEBSITE,
            CHANNEL_ID: paytmConfig.CHANNEL_ID,
            TXN_AMOUNT: `${amount}`, // String
            ORDER_ID: orderId, // String
            EMAIL: email, // String
            MOBILE_NO: mobile, // String
            CUST_ID: customerId, // String
            CHECKSUMHASH: checkSum, //From your server using PayTM Checksum Utility 
            CALLBACK_URL: callbackUrl,
            // MERC_UNQ_REF: mercUnqRef, // optional
        };
        
        Paytm.startPayment(details);
    }

    render(){
        return(
            <div>

            </div>
        )
    }
}

export default Paytmreact;