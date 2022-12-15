import React, { Component } from 'react';
import {Provider} from 'react-redux';
import store from './store';
// import Posts from './components/Posts';
// import { Link } from 'react-router-dom';
// import Paytm from './components/paytm/Paytm';
// import About from './components/About';
// import { BrowserRouter, Route, Switch } from 'react-router-dom';
// import Product from './components/paypal/Product';
// import PostForm from './components/PostForm';
// import Youtubeapi from './components/Youtube api/Youtubeapi';
// import RegisterModal from './components/auth/RegisterModal';
// import Dashboard from './components/dashboard/Dashboard';
import Header from './components/dashboard/Header';
import {loadUser} from './actions/authActions'
// import { BrowserRouter, Switch, Route } from 'react-router-dom';
// import Product from './components/paypal/Product';

class App extends Component {
  componentDidMount(){
    store.dispatch(loadUser())
  }
  
  render() {
    return (
      <Provider store={store}>
          
            <title>Syed Expert</title>
              <meta charSet="utf-8"></meta>
              <meta name="viewport" content="width=device-width" />
              <meta name="description" content="Todos on steroid!" />
              <meta name="keywords" content="web design, affordable web design, professional web design" />
              <meta name="author" content="Syed Expert" />
          <div className="App">

          {/* <BrowserRouter>
            <Switch>
              <Route exact path = '/pay/:id'>
                <Product/>
              </Route>
            </Switch>
          </BrowserRouter> */}

          <Header />

          {/* <BrowserRouter>
          <Switch>
              <Route exact path="/">
                <Posts/>
              </Route>
              <Route path="/about">
                <About />
              </Route>
              <Route  path="/addaccount">
                <PostForm />
              </Route>
              <Route path="/register">
                <RegisterModal />
              </Route>
              <Route path="/paytm">
                <Paytm />
              </Route>
              <Route path="/vedios">
                <Youtubeapi />
              </Route>     
              <Route path="/pay">
                  <Product />
            </Route>
              </Switch> 
          </BrowserRouter> */}

          </div>
      </Provider>
    );
  }
}

export default App;
