import { CHANGE_DATE_RANGE } from '../actionType';

export const changeDateRange = (section, dateRange) => ({
  type: CHANGE_DATE_RANGE,
  section,
  dateRange
})
