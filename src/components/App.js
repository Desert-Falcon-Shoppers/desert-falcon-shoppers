import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
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
} from ".";

const App = () => {
  return (
    <Router>
      <Header />
      <Nav />
      <Switch>
        <Signup path="/signup" component={Signup} />
        <Route path="/login" component={Login} />
        <Route path="/footer" component={Footer} />
        <Route path="/categories" component={CatColumn} />
        <Route path="/cart" component={Cart} />
        <Route path="/productrows" component={ProductRows} />
        <Route path="/home" component={Home} />
        <Route path="/checkout" component={Checkout} />
        <Route path="/productview" component={ProductView} />
        <Route path="/nav" component={Nav} />
        <Route path="/account" component={MyAccount} />
        <Route path="/myorders" component={MyOrders} />

        {/* route props are things like a wildcard that exists at that particular route */}
        {/* <Route path="/checkout" component={Checkout} /> */}
      </Switch>
      <Footer />
    </Router>
  );
};
export default App;
