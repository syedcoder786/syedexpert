import React, { Component } from 'react';
import '../style/style.css';
// import Product from './paypal/Product';
import {connect} from 'react-redux';
import { fetchPosts } from '../actions/postActions';
// import { findPost } from '../actions/postActions';
// import PropTypes from 'prop-types';
class Posts extends Component {
  // state = {
  //   user:''
  // }

  // toggle = () => {
  //   this.setState({ isOpen: !this.isOpen })
  // }

componentDidMount() {

  this.props.fetchPosts()
  // setInterval(
    // () => 
    // this.props.fetchPosts(),
    // 2000
  // );
  const script = document.createElement("script");
      script.src = "https://www.paypal.com/sdk/js?client-id=AbQycP9xKQ37N-HbUvTr80YCeCbKRWSyga-aDXoLAj-c-e4I2Nii-0aJVgVVZ1DOhhXiFOH_6-KWop1A";
      // script.addEventListener("load", () => setLoaded(true))
      document.body.appendChild(script);

      // if(!this.props.auth.token){
      //   this.setState({user:''})
      // }
      // else{
      //   this.setState({user: ''})
      // }
// }


// componentDidUpdate(prevProps){
//   const {user} = this.props.auth;
//   if(user !== prevProps.auth.user){
//     if(this.props.auth.token){
//       this.setState({user:this.props.auth.user.name})
//     }
//   }
      // this.setState({user:null})
    
  
}


onClick = (e) => {
  console.log(e.target.name)
  console.log(e.target.value)
  if(this.props.auth.token){
  // console.log(e.target.name)
  // console.log(e.target.value)
      if(e.target.value === '0'){
        alert("Sorry, Not in stock")
        console.log('Sorry, Not in stock')
      }
      else{
        // this.props.findPost({id:e.target.name})
        // <Product props ={e.target.name}/>
        console.log(e.target.value)
        window.location.assign('/pay/'+e.target.name)
      }
  }else{
    window.location.assign('/register')
    // () =>{
    // var r = confirm("Press a button!");
    // if(r){
    //   window.location.replace('/register')
    // }
    // confirm('hi')
  // }
  }
  
  // document.getElementById("unique").innerHTML = <Product id={e.target.value} />

}

// }



  render() {

    // const authLinks = (
    //   <Logout />
    // )

    // const guestLinks = (
    //   <a href="register">Login</a>
    // )



      const postItems = this.props.posts.map(({ _id, img_path, bp_coins, selling_rate, in_stock }) => (
        
        <div key={_id}>
        <div className="box">
        <img src = {"./pay/"+img_path} alt = "hi"></img><br/>
        <p>Coins- {bp_coins}<br/>
        In Stock- {in_stock}<br/>
        <b>₹ {selling_rate}</b><br/>
        {/* <Product id={_id} /><br/> */}
        <button onClick={this.onClick} value={in_stock} name={_id}>Buy Now</button>
        
        </p>
        <hr/>
        </div>

        </div>
      
    
      ));
      
    
      return (
      <div>
  
    
      {/* <header>
        <div className="container">
          <div id="branding">
            <h1><span className="highlight">Welcome </span>{this.state.user}</h1>

          </div>
          <nav>
            <ul>
              <li className="current"><a href="/">Home</a></li>
              <li><a href="vedios">Vedios</a></li>
              <li>{this.props.auth.token?authLinks:guestLinks}</li>
            </ul>
          </nav>
        </div>
      </header> */}
  
      <section id="showcase">
        <div className="container">
          <h1>Affordable Account Prices</h1>
          <p><b>8 ball pool account prices.Payment accepted in Paytm/Paypal/Debit/Credit Cards.Limited stocks available.Get Email/Password directly after payment. (Whatsapp Only) Mob- +91-8595675141</b></p>
        </div>
      </section>
  
      <section id="boxes">
      <div id = "unique">
      <div className="container">

      {this.props.postLoading?<div><center><h1 style={{color:'white'}}>Loading...</h1></center><br/></div>:postItems}
      
      </div>
      </div>
      </section>  
  
        </div>
      )
    
}
}

const mapStateToProps=state=>({
    posts:state.post.items,
    postLoading:state.post.postLoading,
    auth:state.auth
    // newPost:state.post.item
});

export default connect(mapStateToProps, { fetchPosts })(Posts);
