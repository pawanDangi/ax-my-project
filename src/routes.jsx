import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Dashboard from './containers/dashboard';
import Reporting from './containers/reporting';
import AppHeader from './header/app-header';
import Loading from './components/loading'

const Routes = ({loading}) => (
  <Router>
    <div>
      <AppHeader />
      {
        loading ? <Loading /> :
        <div>
          <Route exact path="/dashboard" component={Dashboard} />
          <Route path="/reporting" component={Reporting} />
        </div>
      }
    </div>
  </Router>
);

export default Routes;
