import React, { Component } from 'react';
import MessengerCustomerChat from 'react-messenger-customer-chat';

class Chat extends Component {
  
  render() {
    return (

          <div className="Chat">
            <MessengerCustomerChat
                pageId="2014224398678725"
                appId="241802743644158"
                // htmlRef="localhost:3000"
            />
          </div>
    );
  }
}

export default Chat;
