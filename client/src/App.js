import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import HandleError from './components/HandleError';
import Login from './components/pages/Login';
import Home from './components/pages/Home';
import MyOrders from './components/pages/MyOrders';
import Checkout from './components/pages/Checkout';
import AddPizza from './components/pages/AddPizza';
import Cart from './components/pages/Cart';
import Notfound from './components/pages/Notfound';
import './App.css';

const App = () => {
  return (
    <HandleError>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/home" component={Home} />
        <Route path="/my-orders" component={MyOrders} />
        <Route path="/checkout" component={Checkout} />
        <Route path="/cart" component={Cart} />
        <Route path="/addPizza/:pizza_id/:quantity?" component={AddPizza} />
        <Route component={Notfound} />
      </Switch>
    </HandleError>

  );
}

function mapStateToProps(state, props) {
  // let elements = props.history.location.pathname.split("/");
  return {
    // location: props.location.pathname
  }
}

export default withRouter(connect(mapStateToProps)(App));