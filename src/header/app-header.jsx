import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import {
  AppBar,
  Toolbar
} from '@material-ui/core/';

import HeaderTab from './header-tab';
import UserTab from './user-tab';

const styles = {
  root: {
    backgroundColor: '#1656a0 !important'
  },
  img: {
    paddingRight: '15px'
  }
};

class Header extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div>
        <AppBar position="static" className={classes.root} >
          <Toolbar>
            <HeaderTab label={'dashboard'} routePath={'/dashboard'}>
              <img alt="Header Icon" src='./icons/header_img.png' className={classes.img}/>
            </HeaderTab>
            <HeaderTab label={'Reporting'} routePath={'/reporting'}/>
            <HeaderTab label={'Supply'} routePath={'/supply'}/>
            <HeaderTab label={'Demand'} routePath={'/demand'}/>
            <HeaderTab label={'Network Management'} routePath={'/network-management'}/>
            <UserTab />
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Header);
