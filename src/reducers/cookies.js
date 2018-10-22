import { SET_COOKIES } from '../actionType';

const cookies = (state = {}, action) => {
  switch (action.type) {
    case SET_COOKIES:
      return action.cookies;
    default:
      return state;
  }
}

export default cookies;
