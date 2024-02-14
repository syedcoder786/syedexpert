import React, { Component } from 'react';
import '../../style/style.css';
import { connect } from 'react-redux';
// import PropTypes from 'prop-types'
import { register } from '../../actions/authActions';
import { clearErrors } from '../../actions/errorActions';
// import Logout from './Logout'
import LoginModal from './LoginModal'
import Facebookapi from './Facebookapi';

class RegisterModal extends Component{
    state = {
        name:'',
        email:'',
        password:'',
        password2:'',
        msg:null
    }

    // static propTypes = {
    //     isAuthenticated: PropTypes.bool
    //     // error:PropTypes.error.Required
    // }

    componentDidUpdate(prevProps){
      const {error} = this.props;
      if(error !== prevProps.error){
        if(error.id ==='REGESTER_FAIL'){
          this.setState({msg:this.props.error.msg.msg})
        }else{
          this.setState({msg:null})
        }
      }
    }

    // toggle = () =>{
    //     this.setState({ modal: !this.state.modal })
    // }

    onChange=(e)=>{
        this.setState({[e.target.name]:e.target.value})
    }
    onSubmit=(e)=>{
        e.preventDefault();
        const user = {
          name:this.state.name,
          email:this.state.email,
          password:this.state.password,
          password2:this.state.password2
        };
        console.log(user)
        this.props.register(user)
    }

    onClick=(e)=>{
      this.props.clearErrors();
    }

render(){
  if(this.props.token){
    return(
      window.location.replace('/')
    )
  }else{
 return(
   <div>
     	
      {/* <header>
        <div className="container">
          <div id="branding">
            <h1><span className="highlight">Syed</span> Expert</h1>
          </div>
          <nav>
            <ul>
              <li className="current"><a href="/">Home</a></li>
              <li><a href="vedios">Vedios</a></li>
            </ul>
          </nav>
        </div>
      </header> */}

      <section id="showcase">
        <div className="container">
          <h1>Affordable Account Prices</h1>
          <p><b>8 ball pool account prices.Payment accepted in Paypal/Debit/Credit Cards.Limited stocks available.Fast Service available.Get Email/Password directly after payment.</b></p>
        </div>
      </section>
      <br/>
      <center>
        <h2 style={{color:'white'}}>Register</h2>
        {this.state.msg?<div><span style={{color:'white'}}>{this.state.msg}  <button onClick={this.onClick} style={{cursor:'pointer', backgroundColor:'red', borderRadius:'3px', borderColor:'red'}}>x</button></span></div>:''}<br/>
        <form onSubmit={this.onSubmit}>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Name"
                onChange={this.onChange}
                style={{width:'255px', height:'20px', borderRadius:'3px'}}
              /><br/><br/>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                onChange={this.onChange}
                style={{width:'255px', height:'20px', borderRadius:'3px'}}
              /><br/><br/>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                onChange={this.onChange}
                style={{width:'255px', height:'20px', borderRadius:'3px'}}
              /><br/><br/>
              <input
                type="password"
                name="password2"
                id="password2"
                placeholder="Rewrite Password"
                onChange={this.onChange}
                style={{width:'255px', height:'20px', borderRadius:'3px'}}
              /><br/><br/>
              <input
                type="submit"
                value="Sign Up"
                style = {{cursor:'pointer', height:'30px', width:'100px', borderRadius:'3px'}}
              />
        </form>
        
        <br/><hr style={{width:'255px'}}/><br/>
        <Facebookapi />
        <br/>
        <hr style={{width:'255px'}}/>
        <LoginModal />
        
      </center>

      {/* <footer>
        <p>S.M.Mohdin Web Deisgn, Copyright &copy; 2020</p>
      </footer> */}

   </div>
 )  

 }
}
}

const mapStateToProps=state=>({
    token:state.auth.token,
    error:state.error
});

export default connect(mapStateToProps, { register, clearErrors } )(RegisterModal);
// export default RegisterModal;

