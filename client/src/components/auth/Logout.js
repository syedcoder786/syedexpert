import React, { Component } from 'react'
import { connect } from 'react-redux'
import { logout } from '../../actions/authActions'

export class Logout extends Component{
    render(){
        return(
            // <Fragment>
                <a onClick={this.props.logout} style={{cursor:'pointer'}} href="#">Logout</a>
            // </Fragment>
        )
    }
}

export default connect(null,{logout})(Logout);