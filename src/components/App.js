import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Checkout, Signup, Login, Home, ProductRows, CatColumn, Footer } from ".";

const App = () => {
  return (
    <div>
      <div>
        <Router>
          <Switch>
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
  );
};

export default App;
