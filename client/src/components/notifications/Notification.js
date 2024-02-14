import React, { Component } from 'react';
// import axios from 'axios';
// import {connect} from 'react-redux';
// import {AddPost} from '../actions/postActions';
class Notification extends Component {
    constructor(){
        super();
        this.state={
            post_id:'',
            email:'',
            password:'',
            selling_rate:''
        }
    }


  render() {

    return (
      <div>
        <section id="showcase">
            <div className="container">
            <h1>Affordable Account Prices</h1>
            <p><b>8 ball pool account prices.Payment accepted in Paytm/Paypal/Debit/Credit Cards.Limited stocks available.Fast Service available.Get Email/Password directly after payment.</b></p>
            </div>
        </section>

        <br/>
        <p>Hello</p>
        
      </div>
    )
  }
  
}
// const mapStateToProps=state=>({
// //   posts:state.post.items,
// //   newpost:state.post.item
// });

export default Notification;
// export default connect(mapStateToProps, { AddPost })(PostForm);

