import React, { Component } from 'react';
import './index.css';
import exologo from './assets/exologo.png';
import exolsv1 from './assets/exolsv1.png';
import exolsv2 from './assets/exolsv2.png';
import exolsv3 from './assets/exolsv3.png';
import exodus from './assets/exodus.png';
import obsession from './assets/obsession.png';
import loveshot from './assets/loveshot.png';
import tempo from './assets/tempo.png';
import thewar from './assets/thewar.png';
import power from './assets/power.png';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    Redirect,
    useParams,
    withRouter
} from 'react-router-dom';

function MarketPlace() {
    return (
        <Router>
            <div className="header" >
                <img src={exologo} alt="" />
                <AuthButton />

                <ul>
                    <li className="TopBar-1" id="TB1">
                        <Link className="Link-1" to="/home">Home</Link>
                    </li>
                    <li className="TopBar-1">
                        <Link className="Link-1" to="/product">Product</Link>
                    </li>
                    {/* <li className="TopBar-1">
                        <Link className="Link-1" to="/cart">Cart</Link>
                    </li> */}
                </ul>


                <Switch>
                    <Route exact path="/home" component={Home} />
                    <Route path="/login" component={Login} />
                    <PrivateRoute path="/product" component={Product} />
                    {/* <PrivateRoute path="/cart" component={Cart} /> */}
                </Switch>
            </div>
        </Router>
    )
}

function Cart() {
    
}

const fakeAuth = {
    isAuthenticated: false,
    authenticate(cb) {
        fakeAuth.isAuthenticated = true;
        setTimeout(cb, 100);
    },
    signout(cb) {
        fakeAuth.isAuthenticated = false;
        setTimeout(cb, 100);
    }
}

const AuthButton = withRouter(({ history }) =>
    fakeAuth.isAuthenticated ? (
        <p id="logout">
            <button
                onClick={() => {
                    fakeAuth.signout(() => history.push("/home"));
                }}>
                <p>Sign out</p>
            </button>
        </p>
    ) : (
            <p id="warning-log" >
                You are not log in!
            </p>
        )
);

function PrivateRoute({ component: Component, ...rest }) {
    return (
        <Route
            {...rest}
            render={props =>
                fakeAuth.isAuthenticated ? (
                    <Component {...props} />
                ) : (
                        <Redirect
                            to={{
                                pathname: "/login",
                                state: { from: props.location }
                            }}
                        />
                    )
            }
        />
    );
}

function Home() {
    return (
        <div className="Home">
        <header class="masthead">
            <div class="container">
                <div class="masthead-subheading">Welcome To Our Store!</div>
                <div class="masthead-heading text-uppercase">Nice To Meet You</div>
            </div>
        </header>
        </div>
    )
}

function Product() {

    let { path, url } = useRouteMatch();

    return (
        <div className="header-2">
            {/* <h2>Data Barang</h2> */}
            <ul>
                <center><li className="TopBar-2">
                    <Link to={`${url}/Albums`}>Albums</Link>
                </li>
                <li className="TopBar-2">
                    <Link to={`${url}/Lightstick`}>Lightstick</Link>
                </li></center> <br></br><br></br><br></br>
            </ul>

            <Switch>
                <Route exact path={path}>

                </Route>
                <Route path={`${path}/:dataId`}>
                    <DataBody />
                </Route>
            </Switch>
        </div>
    )
}

function DataBody() {
    let { dataId } = useParams();

    if (dataId === "Albums") {
        return (
            <div className="Albums">
                <div className="grid">
                    <div className="row">
                        <div className="col-sm">
                            <img src={loveshot} alt="Thumbnail" width="15" height="210"/>
                            <center><h3>EXO ‘LOVE SHOT’</h3><h4>$21.00</h4></center>
                        </div>
                        <div className="col-sm">
                            <img src={exodus} alt="Thumbnail" width="15" height="210"/>
                            <center><h3>EXO ‘EXODUS’</h3><h4>$33.29</h4></center>
                        </div>
                        <div className="col-sm">
                            <img src={obsession} alt="Thumbnail" width="15" height="210"/>
                            <center><h3>EXO ‘OBSESSION’</h3><h4>$20.39</h4></center>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm">
                            <img src={power} alt="Thumbnail"width="15" height="210"/>
                            <center><h3>EXO ‘The Power of Music’</h3><h4>$25.99</h4></center>
                        </div>
                        <div className="col-sm">
                            <img src={tempo} alt="Thumbnail" width="15" height="210"/>
                            <center><h3>EXO ‘DON'T MESS UP MY TEMPO’</h3><h4>$22.98</h4></center>
                        </div>
                        <div className="col-sm">
                            <img src={thewar} alt="Thumbnail" width="15" height="210"/>
                            <center><h3>EXO ‘THE WAR’</h3><h4>$23.99</h4></center>
                        </div>
                    </div>
                </div>
            </div>
        )
    } else if (dataId === "Lightstick") {
        return (
            <div className="Lightstick">
                <div className="row">
                    <div className="col-sm">
                        <img src={exolsv1} alt="Thumbnail" />
                        <center><h3>EXO LIGHTSTICK VER 1</h3><h4>$36.50</h4></center>
                    </div>
                    <div className="col-sm">
                        <img src={exolsv2} alt="Thumbnail" />
                        <center><h3>EXO LIGHTSTICK VER 2</h3><h4>$37.99</h4></center>
                    </div>
                    <div className="col-sm">
                        <img src={exolsv3} alt="Thumbnail" />
                        <center><h3>EXO LIGHTSTICK VER 3</h3><h4>$55.90</h4></center>
                    </div>
                </div>
            </div>
        );
    }
}

class Login extends Component {
    state = { redirectToReferrer: false };

    login = () => {
        fakeAuth.authenticate(() => {
            this.setState({ redirectToReferrer: true });
        });
    };

    render() {
        const { from } = this.props.location.state || { from: { pathname: "/home" } };
        const { redirectToReferrer } = this.state;

        if (redirectToReferrer) {
            return <Redirect to={from} />
        }

        return (
            <div className="Login">
              <header class="masthead">
                <div class="container">
                <div class="masthead-subheading">You must log in to view the page</div>
                <button onClick={this.login}>Login</button>
            </div>
            </header>
        </div>
        );
    }
}

export default MarketPlace;