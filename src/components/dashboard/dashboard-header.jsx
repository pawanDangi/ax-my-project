import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import {
  Grid
} from '@material-ui/core/';
import DateRangePicker from 'react-bootstrap-daterangepicker';
import moment from 'moment';
import _ from 'lodash';
import 'bootstrap-daterangepicker/daterangepicker.css';
import { changeDateRange } from '../../actions';

const styles = theme => ({
  root: {
    flexGrow: 1,
    textAlign: 'center',
    margin: '10px'
  },
  headerLeft: {
    textAlign: 'left'
  },
  [theme.breakpoints.down('sm')]: {
    headerLeft: {
      textAlign: 'center'
    },
  },
  title: {
    fontSize: '20px',
    fontWeight: '600'
  },
  headerRight: {
    textAlign: 'center'
  },
  updateText: {
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis'
  },
  updated: {
    lineHeight: '30px'
  },
  filterIcon: {
    width: '20px',
    cursor: 'pointer'
  },
  dateText: {
    textAlign: 'center',
    width: '95%',
    border: '1px solid #ccc',
    borderRadius: '6px',
    cursor: 'pointer'
  },
  dateRange: {
    width: '100%'
  }
});

const ranges = {
  'Today': [moment(), moment()],
  'Yesterday': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
  'Last 7 Days': [moment().subtract(6, 'days'), moment()],
  'Last 30 Days': [moment().subtract(29, 'days'), moment()],
  'This Month': [moment().startOf('month'), moment().endOf('month')],
  'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
}

class DashboardHeader extends Component {
  handelDateChange = (picker) => {
    this.props.changeDateRange('dashboard', {
      start: picker.startDate,
      end: picker.endDate
    })
  }

  render() {
    const { classes, dateRange } = this.props;
    const startDate = dateRange.start.format('MM/DD/YYYY');
    const endDate = dateRange.end.format('MM/DD/YYYY')
    return (
      <div className={classes.root}>
        <Grid container spacing={0}>
          <Grid item lg={8} md={6} sm={12} xs={12} className={classes.headerLeft}>
            <span className={classes.title}>Dashboard</span>
          </Grid>
          <Grid item lg={4} md={6} sm={12} xs={12} container spacing={0} className={classes.headerRight}>
            <Grid item md={5} xs={4} className={classes.updateText}>
              <span className={classes.updated}>Updated: 26 Minutes ago</span>
            </Grid>
            <Grid item md={1} xs={2}>
              <img className={classes.filterIcon} src="./icons/filter.svg" alt="Filter"></img>
            </Grid>
            <Grid item md={6} xs={6}>
              <DateRangePicker
                containerClass={classes.dateRange}
                startDate={dateRange.start}
                endDate={dateRange.end}
                ranges={ranges}
                onApply={(e, picker) => this.handelDateChange(picker)}
              >
                <input className={classes.dateText} value={`${startDate} - ${endDate}`} disabled />
              </DateRangePicker>
            </Grid>
          </Grid>
        </Grid>
      </div>
    );
  }
}

DashboardHeader.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  dateRange: _.get(state, 'dateRange.dashboard') ? _.get(state, 'dateRange.dashboard') : {start: moment(), end: moment()}
})

const mapDispatchToProps = dispatch => ({
  changeDateRange: (section, range) => dispatch(changeDateRange(section, range))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(DashboardHeader))
