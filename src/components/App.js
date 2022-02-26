import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Checkout } from '.';
import '../style/App.css';

const App = () => {
  return (
    <Router>
      <Switch>
        {/* route props are things like a wildcard that exists at that particular route */}
        <Route path="/checkout" component={Checkout} />
      </Switch>
    </Router>
  );
};

export default App;
