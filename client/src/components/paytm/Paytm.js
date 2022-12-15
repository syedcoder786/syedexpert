import React, { Component } from 'react';
import axios from 'axios';
// import '../../style/style.css';
// import { BrowserRouter, Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types'
// import { PayPalButton } from "react-paypal-button-v2";
import {connect} from 'react-redux';
// import {findPost} from '../../actions/postActions';
class Paytm extends Component {


  static propTypes = {
    isAuthenticated: PropTypes.bool
    // error:PropTypes.error.Required
}
//   constructor(){
//     super();
//     this.state={
//         post: ''
//     }
// }

componentDidMount() {
    // console.log(this.props.post.selling_rate)
    // const postjson = this.props.post;
    // const postprops = JSON.parse(postjson)
    // this.setState({post:postprops})
    const selling_rate = {selling_rate:this.props.price};

    const config = {
        headers:{
            "Content-type":"application/json"
        }
    }
        config.headers['x-auth-token'] = this.props.token;
    // axios({
    //     url:'/paytm',
    //     method:'post',
    //     data:selling_rate
    // })
    console.log(this.props.token)
    axios.post('/paytm',selling_rate,config)
    .then(res => {
        console.log(res.data.msg)
        this.setState({form:res.data.msg})
        // setTimeout(() => {

        document.getElementById('div').innerHTML = res.data.msg;
        document.f1.submit()

        // }, 10000);
        
    }).catch(err => {
        console.log(err.response.status)
        if(err.response.status === 500){
            // document.getElementById("divmain").innerHTML = "<h1>Error 500. Please try again.<br><a href='/'>Try Again</a></h1>"
            window.location.replace('/')
        }
        else if(err.response.status === 400){
            window.location.replace('/')
        }
    })
}

  render() {
    
  // if(this.props.isAuthenticated === false){
  //   // console.log(!this.props.isAuthenticated)
  //   return(
  //     window.location.assign('/register')
  //   )
  // }
  // else{
  //   console.log(this.props.isAuthenticated)
    return (
    <div>
    <div id="divmain">
        <h1 style={{color:'white'}}>Please wait...Don't reload the page</h1>
        <div id='div'></div>
        {/* <p id='div2'></p> */}
    </div>
    </div>
 
    )
  }
  }
// }

const mapStateToProps=state=>({
    price:state.post.price, // check for posts
    posterr:state.post.itemerr,
    token:state.auth.token
});

// export default connect(mapStateToProps, { findPost })(Paytm);
export default connect(mapStateToProps)(Paytm);
// export default Product;
