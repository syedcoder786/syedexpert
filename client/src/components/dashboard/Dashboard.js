import React, { Component } from 'react';
// import Header from ''
// import {NavLink} from 'react-router-dom';
import Logout from '../auth/Logout';
import '../../style/style.css';
import {connect} from 'react-redux';
// import Chat from '../Chat';
class Dashboard extends Component {
  state = {
    user:''
  }

    componentDidUpdate(prevProps){
    const {user} = this.props.auth;
    if(user !== prevProps.auth.user){
        if(localStorage.getItem('token')){
        this.setState({user:this.props.auth.user.name})
        }else{
            this.setState({user:''})
        }
    }
    }

  render() {

    const authLinks = (
        <Logout />
    )

    const guestLinks = (
        <a href="register">Login</a>
    )
    // const {user} =this.props.auth;

      return (
        <div>
            <header>
                <div className="container">
                <div id="branding">
                <h1><span className="highlight">Welcome </span>{localStorage.getItem('token')?this.state.user:''}</h1>

                </div>
                {/* <React.Fragment> */}
                <nav>
                    <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/videos">Videos</a></li>
                    <li><a href="/about">About</a></li>
                    {/* <li><a href="/vedios">Vedios</a></li> */}
                    <li>{localStorage.getItem('token')?authLinks:guestLinks}</li>
                    </ul>
                </nav>
                {/* </React.Fragment> */}
                </div>
            </header>
            {/* <Chat /> */}
  
  
        </div>
      )
    
    }
}

const mapStateToProps=state=>({
    // posts:state.post.items,
    // postLoading:state.post.postLoading,
    auth:state.auth
});

export default connect(mapStateToProps)(Dashboard);
