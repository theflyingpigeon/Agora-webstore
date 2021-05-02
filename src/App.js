import React, {Component} from "react";
import {Switch, Route} from "react-router-dom";

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./components/Navbar";
import Productlist from "./components/Productlist";
import Details from "./components/Details";
import Cart from "./components/Cartfolder/Cart";
import Default from "./components/Default";
import Model from "./components/Model";

class App extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar />

                <Switch>
                    <Route exact path="/" component={Productlist} />
                    <Route exact path="/details" component={Details} />
                    <Route exact path="/cart" component={Cart} />
                    <Route exact component={Default} />
                </Switch>
                <Model />
            </React.Fragment>
        );
    }
}

export default App;
