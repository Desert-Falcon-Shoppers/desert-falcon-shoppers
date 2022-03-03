import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Checkout, SignupOrLogin, Home, ProductRows, CatColumn } from ".";

const App = () => {
  return (
    <div>
      <div>
        <Router>
          <Switch>
            <SignupOrLogin path="/login" component={SignupOrLogin} />
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
