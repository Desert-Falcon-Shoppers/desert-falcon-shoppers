import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Checkout, SignupOrLogin } from ".";
import Header from "./Header";
import Nav from "./Nav";

const App = () => {
  return (
    <Router>
      <Switch>
        <SignupOrLogin path="/login" component={SignupOrLogin} />
        <Header path="/header" component={Header} />
        {/* route props are things like a wildcard that exists at that particular route */}
        {/* <Route path="/checkout" component={Checkout} /> */}
      </Switch>
    </Router>
  );
};

export default App;
