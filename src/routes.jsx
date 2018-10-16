import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Dashboard from './containers/dashboard';
import Reporting from './containers/reporting';
import AppHeader from './header/app-header';

const Routes = () => (
  <Router>
    <div>
      <AppHeader />
      <Route exact path="/dashboard" component={Dashboard} />
      <Route path="/reporting" component={Reporting} />
    </div>
  </Router>
);

export default Routes;
