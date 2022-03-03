import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Signup, Login } from '.';


const App = () => {
  return (
    <Router>
      <Switch>
        <Signup path="/signup" component={Signup} />
        <Route path="/login" component={Login} />

        {/* route props are things like a wildcard that exists at that particular route */}
        {/* <Route path="/checkout" component={Checkout} /> */}
      </Switch>
    </Router>
  );
};

export default App;
