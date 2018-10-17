import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import {
  Paper,
  Grid
} from '@material-ui/core/';

const styles = theme => ({
  root: {
    flexGrow: 1,
    margin: '10px'
  },
  paper: {
    padding: '5px',
    textAlign: 'center'
  },
  title: {
    color: '#777',
    padding: '5px 0px'
  },
  value: {
    color: '#0073b6',
    padding: '5px 0px'
  }
});

class Info extends Component {
  render () {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Grid container={true} spacing={0}>
          <Grid item md={true} sm={2} xs={4}>
            <Paper className={classes.paper}>
              <div className={classes.value}>0</div>
              <div className={classes.title}>Requests</div>
            </Paper>
          </Grid>
          <Grid item md={true} sm={3} xs={4}>
            <Paper className={classes.paper}>
              <div className={classes.value}>0</div>
              <div className={classes.title}>Opportunities</div>
            </Paper>
          </Grid>
          <Grid item md={true} sm={2} xs={4}>
            <Paper className={classes.paper}>
              <div className={classes.value}>0</div>
              <div className={classes.title}>Responses</div>
            </Paper>
          </Grid>
          <Grid item md={true} sm={3} xs={4}>
            <Paper className={classes.paper}>
              <div className={classes.value}>0</div>
              <div className={classes.title}>Response Rate</div>
            </Paper>
          </Grid>
          <Grid item md={true} sm={2} xs={4}>
            <Paper className={classes.paper}>
              <div className={classes.value}>0</div>
              <div className={classes.title}>Impressions</div>
            </Paper>
          </Grid>
          <Grid item md={true} sm={3} xs={4}>
            <Paper className={classes.paper}>
              <div className={classes.value}>0</div>
              <div className={classes.title}>Clicks</div>
            </Paper>
          </Grid>
          <Grid item md={true} sm={3} xs={4}>
            <Paper className={classes.paper}>
              <div className={classes.value}>0</div>
              <div className={classes.title}>CTR</div>
            </Paper>
          </Grid>
          <Grid item md={true} sm={3} xs={4}>
            <Paper className={classes.paper}>
              <div className={classes.value}>0</div>
              <div className={classes.title}>Gross Revenue</div>
            </Paper>
          </Grid>
          <Grid item md={true} sm={3} xs={4}>
            <Paper className={classes.paper}>
              <div className={classes.value}>0</div>
              <div className={classes.title}>Gross eCPM</div>
            </Paper>
          </Grid>
          <Grid item md={true} sm={true} xs={6}>
            <Paper className={classes.paper}>
              <div className={classes.value}>0</div>
              <div className={classes.title}>No Fill Fee</div>
            </Paper>
          </Grid>
          <Grid item md={true} sm={true} xs={6}>
            <Paper className={classes.paper}>
              <div className={classes.value}>0</div>
              <div className={classes.title}>Platform Fee</div>
            </Paper>
          </Grid>
          <Grid item md={true} sm={true} xs={6}>
            <Paper className={classes.paper}>
              <div className={classes.value}>0</div>
              <div className={classes.title}>Net Revenue</div>
            </Paper>
          </Grid>
          <Grid item md={true} sm={true} xs={6}>
            <Paper className={classes.paper}>
              <div className={classes.value}>0</div>
              <div className={classes.title}>Net eCPM</div>
            </Paper>
          </Grid>
        </Grid>
      </div>
    );
  }
}

Info.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Info);
