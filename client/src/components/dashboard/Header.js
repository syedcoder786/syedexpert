import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Dashboard from "./Dashboard";
import Youtubeapi from "../Youtube api/Youtubeapi";
import Posts from "../Posts";
import Paytm from "../paytm/Paytm";
import About from "../About";
import Product from "../paypal/Product";
// import PostForm from './components/PostForm';
// import Youtubeapi from './components/Youtube api/Youtubeapi';
import RegisterModal from "../auth/RegisterModal";
import Notification from "../notifications/Notification";
// import Logout from './auth/Logout'
import "../../style/style.css";
import PostForm from "../PostForm";
import Footer from "./Footer";
// import {connect} from 'react-redux';
class Header extends Component {
  render() {
    return (
      // <Switch>
      //     <Route exact path='/' component ={Posts}/>
      //     <Route path='/vedios' component ={Youtubeapi}/>
      // </Switch>
      <div>
        <BrowserRouter>
          <Dashboard />
          <Switch>
            <Route exact path="/">
              <Posts />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            {/* <Route  path="/addaccount">
                      <PostForm />
                    </Route> */}
            <Route path="/register">
              <RegisterModal />
            </Route>
            <Route path="/paytm">
              <Paytm />
            </Route>
            {/* </Switch> */}
            <Route path="/videos">
              <Youtubeapi />
            </Route>
            <Route path="/pay/:id" component={Product}></Route>
            <Route path="/noti" component={Notification}></Route>
            {/* <Route path="/chat" component={Chat}>
                    </Route> */}
            <Route path="/form" component={PostForm}></Route>
          </Switch>
        </BrowserRouter>
        <Footer />
        {/* <BrowserRouter>
                  <Switch>
                    <Route exact path='/pay/:id' component={Product}>
                    </Route>
                  </Switch>
                </BrowserRouterss> */}
      </div>
    );
  }
}

// const mapStateToProps=state=>({
//     // posts:state.post.items,
//     // postLoading:state.post.postLoading,
//     auth:state.auth
// });

export default Header;
