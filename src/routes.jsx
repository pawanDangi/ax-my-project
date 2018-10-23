import React from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Dashboard from './containers/dashboard';
import Reporting from './containers/reporting';
import AppHeader from './header/app-header';
import Loading from './components/loading';

const Routes = ({loading}) => (
  <Router>
    <div>
      <AppHeader />
      {
        loading ? <Loading /> :
        <div>
          <Switch>
            <Route exact path="/dashboard" component={Dashboard}/>
            <Route path="/reporting" component={Reporting}/>
            <Redirect from="*" to="/dashboard"/>
          </Switch>
        </div>
      }
    </div>
  </Router>
);

export default Routes;
