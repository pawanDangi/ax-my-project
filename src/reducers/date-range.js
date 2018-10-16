import { CHANGE_DATE_RANGE } from '../actionType';

const dateRange = (state = {}, action) => {
  switch (action.type) {
    case CHANGE_DATE_RANGE:
      const range = state;
      range[action.section] = action.dateRange;
      return {...range};
    default:
      return state;
  }
}

export default dateRange;
