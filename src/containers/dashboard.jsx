import React, { Component } from 'react';
import Info from '../components/dashboard/info';
import DashboardHeader from '../components/dashboard/dashboard-header';

class Dashboard extends Component {
  render() {
    return (
      <div>
        <DashboardHeader />
        <Info />
      </div>
    );
  }
}

export default Dashboard;
