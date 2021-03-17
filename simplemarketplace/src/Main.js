import React, { Component } from "react";
import { Route, NavLink, HashRouter, Switch, Redirect,
    useHistory,
    useLocation,} from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Product from "./Product";

export default class Main extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <h1 className="title">Single Page Application</h1>
          <ul className="header">
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/private">About</NavLink></li>
            <li><NavLink to="/product">Product</NavLink></li>
          </ul>
          
          <Switch>
          <Route path="/login">
              <div className="row">
                <div className="col-md-12 bg-danger">
                  <br/>
                  <LoginPage/>
                </div>
              </div>
            </Route>
            <PrivateRoute path="/private">
              <div className="row">
                <div className="col-md-12 bg-danger">
                  <br/>
                  <AuthButton/>
                  <About/>
                </div>
              </div>
            </PrivateRoute>
          </Switch>
          <div className="content">
            <Route exact path="/" component={Home}/>
            <Route path="/about" component={About}/>
            <Route path="/product" component={Product}/>
          </div>
        </div>
      </HashRouter>
    );
  }
}
const fakeAuth = {
    isAuthenticated: false,
    authenticate(cb){
      fakeAuth.isAuthenticated = true;
      setTimeout(cb, 100);
    },
    signout(cb){
      fakeAuth.isAuthenticated = false;
      setTimeout(cb, 100);
    }
  };
  function AuthButton(){
    let history = useHistory();
  
    return fakeAuth.isAuthenticated ? (
      <p>
        Welcome!{" "}
        <button onClick={() => {
          fakeAuth.signout(() => history.push("/"));}}>Sign out</button>
      </p>
    ) : (
      <p></p>
    );
  }
  function PrivateRoute({children, ...rest}){
    return(
      <Route
      {...rest}
      render={({location}) => 
        fakeAuth.isAuthenticated ? (
          children
        ): (
          <Redirect
          to={{
            pathname: "/login",
            state: {from: location}
          }}
          />
        )
      }
      />
    );
  }
  
  function LoginPage(){
    let history = useHistory();
    let location = useLocation();
  
    let {from} = location.state || {from: {pathname: "/"}};
    let login = () => {
      fakeAuth.authenticate(() => {
        history.replace(from);
      });
    };
    return(
      <div>
        <p>You must log in to see the product {" "}
        <button onClick={login}>Log in</button> </p>
      </div>
    );
  }