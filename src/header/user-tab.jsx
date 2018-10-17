import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import {
  IconButton,
  MenuItem,
  Menu
} from '@material-ui/core/';
import AccountCircle from '@material-ui/icons/AccountCircle';

const styles = {
  user: {
    position: 'absolute',
    right: 0
  },
  button: {
    padding: 0
  }
};

class UserTab extends React.Component {
  state = {
    anchorEl: null,
  };

  handleMenu = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    const { classes } = this.props;
    const { anchorEl } = this.state;
    const open = Boolean(anchorEl);

    return (
      <div className={classes.user} >
        <IconButton
          aria-owns={open ? 'menu-appbar' : null}
          aria-haspopup="true"
          onClick={this.handleMenu}
          color="inherit"
          className={classes.button}
        >
          <AccountCircle />
        </IconButton>
        <Menu
          id="menu-appbar"
          anchorEl={anchorEl}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          open={open}
          onClose={this.handleClose}
        >
          <MenuItem onClick={this.handleClose}>Sign Out</MenuItem>
        </Menu>
      </div>
    );
  }
}

UserTab.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(UserTab);
