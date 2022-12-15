import React, { Component } from 'react';
import '../../style/style.css';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'
import { login } from '../../actions/authActions';
import { clearErrors } from '../../actions/errorActions';
// import Logout from './Logout'

class LoginModal extends Component{
    state = {
        email2:'',
        password2:'',
        msg:null
    }

    static propTypes = {
        isAuthenticated: PropTypes.bool
        // error:PropTypes.error.Required
    }

    componentDidUpdate(prevProps){
      const {error} = this.props;
      if(error !== prevProps.error){
        if(error.id ==='LOGIN_FAIL'){
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
          email:this.state.email2,
          password:this.state.password2
        };
        console.log(user)
        this.props.login(user)
    }

    onClick=(e)=>{
      this.props.clearErrors();
    }

render(){
 return(
   <div>

      <center>
        <h2 style={{color:'white'}}>Log In</h2>
        {this.state.msg?<div><span style={{color:'white'}}>{this.state.msg}  <button onClick={this.onClick} style={{cursor:'pointer', backgroundColor:'red', borderRadius:'3px', borderColor:'red'}}>x</button></span></div>:''}
        <form onSubmit={this.onSubmit}>
              <br/>
              <input
                type="email"
                name="email2"
                placeholder="Email"
                onChange={this.onChange}
                style={{width:'255px', height:'20px', borderRadius:'3px'}}
              /><br/><br/>
              <input
                type="password"
                name="password2"
                placeholder="Password"
                onChange={this.onChange}
                style={{width:'255px', height:'20px', borderRadius:'3px'}}
              /><br/><br/>
              <input
                type="submit"
                value="Log In"
                style = {{cursor:'pointer', height:'30px', width:'100px', borderRadius:'3px'}}
              />
        </form>
      </center>

   </div>
 )  


}
}

const mapStateToProps=state=>({
    isAuthenticated:state.auth.isAuthenticated,
    error:state.error
});

export default connect(mapStateToProps, { login, clearErrors } )(LoginModal);
// export default RegisterModal;

