import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Checkout, SignupOrLogin, Home } from ".";
import Footer from "./Footer";
import Header from "./Header";

const App = () => {
  return (
    <div>
      <div>
        <Router>
          <Switch>
            <SignupOrLogin path="/Login" component={SignupOrLogin} />
            <Footer path="/Footer" component={Footer} />
            <Header
              path="/Header"
              component={<Header path="/Header" component={Header} />}
            />
            <Home path="/home" component={Home} />
            {/* route props are things like a wildcard that exists at that particular route */}
            {/* <Route path="/checkout" component={Checkout} /> */}
          </Switch>
        </Router>
      </div>
    </div>
  );
};

export default App;
