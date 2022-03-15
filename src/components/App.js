import React, { useState, useEffect, useContext } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import {
  Checkout,
  Signup,
  Login,
  Home,
  ProductRows,
  ProductView,
  CatColumn,
  Footer,
  Nav,
  Header,
  Cart,
  MyAccount,
  MyOrders,
} from '.';

const App = () => {
  const { isLoggedIn } = useContext(AuthContext);
  return (
    <Router>
      <Header />
      <Nav />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/home" component={Home} />
        {!isLoggedIn && (
          <Switch>
            <Route path="/signup" component={Signup} />
            <Route path="/login" component={Login} />
            <Route exact path="/products" component={ProductRows} />
            <Route path="/products/:productId" component={ProductView} />
          </Switch>
        )}
        {isLoggedIn && (
          <Switch>
            <Route path="/cart" component={Cart} />
            <Route exact path="/products" component={ProductRows} />
            <Route path="/products/:productId" component={ProductView} />
            <Route path="/checkout" component={Checkout} />
            <Route path="/nav" component={Nav} />
            <Route path="/account" component={MyAccount} />
            <Route path="/myorders" component={MyOrders} />
          </Switch>
        )}
      </Switch>
      <Footer />
    </Router>
  );
};
export default App;
