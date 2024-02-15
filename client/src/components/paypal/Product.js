import React, { Component } from "react";
import axios from "axios";
import "../../style/style.css";
// import { BrowserRouter, Route, Switch } from 'react-router-dom';
// import PropTypes from 'prop-types'
import { PayPalButton } from "react-paypal-button-v2";
import { connect } from "react-redux";
import { findPost } from "../../actions/postActions";
import { urlProxy } from "../../config/default";

class Product extends Component {
  //   static propTypes = {
  //     isAuthenticated: PropTypes.bool
  //     // error:PropTypes.error.Required
  // }
  //   constructor(){
  //     super();
  //     this.state={
  //         id: ''
  //     }
  // }

  componentDidMount() {
    console.log(this.props.match.params.id);
    this.props.findPost({ id: this.props.match.params.id });
  }

  onClick = (e) => {
    window.location.replace("/paytm");
    // window.top.close();
  };

  render() {
    // const postjson = this.props.post;
    // const postprops = JSON.parse(postjson)
    // this.setState({post:postprops})
    const { post } = this.props;
    // console.log(this.props.match.params.id)
    console.log(this.props.posterr);
    // if(this.props.posts){
    const paypalbutton = (
      <div>
        <center>
          <div>
            <img
              src={post.img_path}
              alt="hi"
              style={{ borderRadius: "3px", width: "100%", maxWidth: "750px" }}
            ></img>
            <br />
            <p style={{ fontSize: "20px", color: "white" }}>
              Coins- {post.bp_coins}
              <br />
              In Stock- {post.in_stock}
              <br />
              <b>₹ {post.selling_rate}</b>
              <br />
            </p>
            <hr />
            <center>
              <h3 style={{ color: "red" }}>
                Don't Pay Now we are still working.
                <br /> (Whatsapp Us Now To Purchase) Mob- +91-8595675141
              </h3>
            </center>
            <button
              style={{
                height: "50px",
                maxWidth: "750px",
                width: "100%",
                cursor: "pointer",
                fontSize: "27px",
                fontFamily: "Open Sans",
                borderRadius: "8px",
                backgroundColor: "#CCFFFF",
              }}
              onClick={this.onClick}
            >
              <b>
                <span style={{ color: "#000080" }}>
                  Pay<span style={{ color: "#3BB9FF" }}>tm</span>
                </span>
              </b>
            </button>
            <br /> <br />
          </div>

          <div
            style={{
              width: "100vh",
              margin: "auto",
            }}
          >
            <PayPalButton
              // style={{marginLeft:"100px"}}
              createOrder={(data, actions) => {
                return actions.order.create({
                  purchase_units: [
                    {
                      amount: {
                        currency_code: "USD",
                        value: post.selling_rate,
                      },
                    },
                  ],
                });
              }}
              onApprove={(data, actions) => {
                // Capture the funds from the transaction
                return actions.order.capture().then(function (details) {
                  document.getElementById("unique").innerHTML =
                    "Don't reload page... Loading... Plz wait";
                  // this.setState({id:'yes'})
                  // Show a success message to your buyer
                  console.log(details.payer);
                  // alert("Transaction completed by " + details.payer.name.given_name);

                  console.log({
                    orderID: data.orderID,
                    name: details.payer.name.given_name,
                    price: post.selling_rate,
                  });

                  // OPTIONAL: Call your server to save the transaction
                  // if(details.payer.name.given_name){
                  // setTimeout(() => {

                  axios({
                    method: "post",
                    url: urlProxy + "/paymentdetails",
                    data: {
                      orderID: data.orderID,
                      name: details.payer.name.given_name,
                      price: post.selling_rate,
                    },
                  }).then((paydetail) => {
                    console.log(paydetail);
                    axios({
                      method: "post",
                      url: urlProxy + "/api/onSuccess",
                      data: { post_id: post._id },
                    }).then((iddetail) => {
                      console.log(iddetail.data);
                      // console.log(JSON.stringify(paydetail.orderID))
                      document.getElementById("unique").innerHTML =
                        "<center>Success <br>OrderId: " +
                        paydetail.data.orderID +
                        "<br>Email: <b>" +
                        iddetail.data.email +
                        "</b><br>Password: <b>" +
                        iddetail.data.password +
                        "</b><br>Price: " +
                        iddetail.data.selling_rate +
                        "</center>";
                    });
                  });
                });
              }}

              // options = {{clientId:"AbQycP9xKQ37N-HbUvTr80YCeCbKRWSyga-aDXoLAj-c-e4I2Nii-0aJVgVVZ1DOhhXiFOH_6-KWop1A"}} // Paste client id here
            />
          </div>
        </center>
      </div>
    );
    // }
    if (this.props.token === null) {
      // console.log(!this.props.isAuthenticated)
      return window.location.replace("/register");
    } else {
      // console.log(!this.props.isAuthenticated)
      return (
        <div>
          {/* <img src = {logo} alt = "logo" id = "img_header"></img> */}
          {/* <br/> */}
          {/* {postItems} */}

          {/* <header>
        <div className="container">
          <div id="branding">
            <h1><span className="highlight">Syed</span> Expert</h1>
          </div>
          <nav>
            <ul>
              <li className="current"><a href="/">Home</a></li>
              <li><a href="/vedios">Vedios</a></li>
              <li><a href="services">Services</a></li>
            </ul>
          </nav>
        </div>
      </header> */}

          <section id="showcase">
            <div className="container">
              <h1>Affordable Account Prices</h1>
              <p>
                <b>
                  8 ball pool account prices.Payment accepted in
                  Paytm/Paypal/other.Limited stocks available.Get Email/Password
                  directly after payment. (Whatsapp Only) Mob- +91-8595675141
                </b>
              </p>
            </div>
          </section>

          <section id="boxes">
            <div id="unique">
              <div className="container">
                {/* <button style={{height:'50px', width:'1000px'}}><a href='/paytm' style={{textDecoration:'none'}}>Paytm</a></button> */}

                {this.props.posterr.err === "Not in stock"
                  ? "Error, 404 (Bad request) Check URL and Try again or go to Home page"
                  : paypalbutton}
              </div>
            </div>
          </section>
        </div>
      );
    }
  }
}

const mapStateToProps = (state) => ({
  // id:props.match.params.id,
  post: state.post.item, // check for posts
  posterr: state.post.itemerr,
  token: state.auth.token,
});

export default connect(mapStateToProps, { findPost })(Product);
// export default Product;
