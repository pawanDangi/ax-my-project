import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  link: {
    color: 'white !important',
    letterSpacing: '1px',
    padding: '15px',
    '&:hover': {
      textDecoration: 'none'
    }
  },
};

const HeaderTab = ({label, routePath, classes, children}) => {
  return (
    <span>
      <Link key={label} to={routePath} className={classes.link}>
        {children ? children : label.toUpperCase()}
      </Link>
    </span>  
  )
} 

HeaderTab.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(HeaderTab);
