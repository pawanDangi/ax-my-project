import { combineReducers } from 'redux';
import dateRange from './date-range';
import cookies from './cookies';

export default combineReducers({
  dateRange,
  cookies
})