import React, { Component } from 'react';
import FacebookLogin from 'react-facebook-login';
// import '../../style/style.css';
import { connect } from 'react-redux';
// import PropTypes from 'prop-types'
import { loginfacebook } from '../../actions/authActions';
// import { clearErrors } from '../../actions/errorActions';
// import Logout from './Logout'

class Facebookapi extends Component{
    // state = {
    //     name:'',
    //     email:'',
    //     // pictureurl:
    // }

    // static propTypes = {
    //     isAuthenticated: PropTypes.bool
    //     // error:PropTypes.error.Required
    // }

render(){
    const responseFacebook = (response) => {
        if(response){
            const { name, email } = response 
            // this.setState({
            //     name:this.state.name,
            //     email:this.state.email
            // })
            const fbuser = { name, email }
            this.props.loginfacebook(fbuser)


        }
        
      }
      const componentClicked = () => {
        console.log('clicked');
      }
 return(
   <div >

            <FacebookLogin
                appId="217414519615230"
                autoLoad={false}
                fields="name,email,picture"
                onClick={componentClicked}
                callback={responseFacebook}
            />

   </div>
 )  


}
}

const mapStateToProps=state=>({
    isAuthenticated:state.auth.isAuthenticated,
    // error:state.error
});

export default connect(mapStateToProps, { loginfacebook } )(Facebookapi);
// export default Facebookapi;

