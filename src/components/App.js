import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
<<<<<<< HEAD
import {
  Checkout,
  Signup,
  Login,
  Home,
  ProductRows,
  CatColumn,
  Footer,
  Nav,
} from ".";

const App = () => {
  return (
    <Router>
      <Switch>
        <Signup path="/signup" component={Signup} />
        <Route path="/login" component={Login} />
        <Route path="/footer" component={Footer} />
        <Route path="/categories" component={CatColumn} />
        <Route path="/home" component={Home} />
        <Route path="/productrows" component={ProductRows} />
        <Route path="/nav" component={Nav} />
        {/* route props are things like a wildcard that exists at that particular route */}
        {/* <Route path="/checkout" component={Checkout} /> */}
      </Switch>
    </Router>
=======
import { Checkout, Signup, Login, Home, ProductRows, CatColumn, Footer, Header } from ".";

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
            <Signup path="/signup" component={Signup} />
            <Route path="/login" component={Login} />
            <Route path="/footer" component={Footer} />
            <Route path="/categories" component={CatColumn} />
            <Route path="/home" component={Home} />
            <Route path="/productrows" component={ProductRows} />
            {/* route props are things like a wildcard that exists at that particular route */}
            {/* <Route path="/checkout" component={Checkout} /> */}
          </Switch>
        </Router>
      </div>
    </div>
>>>>>>> 408c5a6d90b38579320f4adc3641777bee2e093c
  );
};

export default App;
