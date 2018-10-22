import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import {
  AppBar,
  Toolbar,
  Grid
} from '@material-ui/core/';

import HeaderTab from './header-tab';
import UserTab from './user-tab';

const styles = theme => ({
  root: {
    lexGrow: 1,
    backgroundColor: '#1656a0 !important',
    padding: '0 10px'
  },
  dashboard: {
    padding: '5px'
  },
  img: {
    width: '80%'
  },
  userBlock: {
    textAlign: 'right'
  },
  [theme.breakpoints.up('sm')]: {
    xsUserBlock: {
      display: 'none'
    }
  },
  [theme.breakpoints.down('xs')]: {
    smUserBlock: {
      display: 'none'
    }
  },
  tabs: {
    textAlign: 'center',
    padding: '5px',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
    alignItems: 'center'
  },
  [theme.breakpoints.down('md')]: {
    tabs: {
      fontSize: '12px'
    },
  },
  [theme.breakpoints.down('sm')]: {
    tabs: {
      fontSize: '9px'
    },
  },
  toolBar: {
    padding: '0px'
  },
  user: {
    padding: '5px'
  }
});

class Header extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div>
        <AppBar position="static" className={classes.root} >
          <Toolbar className={classes.toolBar}>
            <Grid container spacing={0}>
              <Grid container item lg={1} sm={2} xs={12} className={classes.dashboard}>
                <Grid item sm={12} xs={4}>
                  <HeaderTab label={'dashboard'} routePath={'/dashboard'}>
                    <img alt="Header Icon" src='./icons/header_img.png' className={classes.img}/>
                  </HeaderTab>
                </Grid>
                <Grid item sm={false} xs={8} className={`${classes.xsUserBlock} ${classes.userBlock}`}>
                  <UserTab />
                </Grid>
              </Grid>
              <Grid container item lg={6} sm={9} xs={12} spacing={0} className={classes.tabs}>
                <Grid item md={2} sm={3} xs={3}>
                  <HeaderTab label={'Reporting'} routePath={'/reporting'}/>
                </Grid>
                <Grid item md={2} sm={2} xs={2}>
                  <HeaderTab label={'Supply'} routePath={'/supply'}/>
                </Grid>
                <Grid item md={2} sm={2} xs={2}>
                  <HeaderTab label={'Demand'} routePath={'/demand'}/>
                </Grid>
                <Grid item md={4} sm={5} xs={5}>
                  <HeaderTab label={'Network Management'} routePath={'/network-management'}/>
                </Grid>
                <Grid item md={2} xs={false}></Grid>
              </Grid>
              <Grid item lg={5} sm={1} xs={false} className={`${classes.smUserBlock} ${classes.userBlock} ${classes.user}`}>
                <UserTab />
              </Grid>
            </Grid>
            {/* <HeaderTab label={'dashboard'} routePath={'/dashboard'}>
              <img alt="Header Icon" src='./icons/header_img.png' className={classes.img}/>
            </HeaderTab>
            <HeaderTab label={'Reporting'} routePath={'/reporting'}/>
            <HeaderTab label={'Supply'} routePath={'/supply'}/>
            <HeaderTab label={'Demand'} routePath={'/demand'}/>
            <HeaderTab label={'Network Management'} routePath={'/network-management'}/>
            <UserTab /> */}
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
