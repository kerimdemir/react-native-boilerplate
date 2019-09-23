import * as keys from '../keys/user.key';

const initialState = {user: []};
export default (state = initialState, action) => {
  switch (action.type) {
    case keys.FETCH_USER_PENDING:
      return {
        ...state,
        error: action.payload,
        fetching: true,
      };
    case keys.FETCH_USER_FULFILLED:
      return {
        ...state,
        users: action.payload,
        fetching: false,
      };
    case keys.FETCH_USER_REJECTED:
      return {
        ...state,
        error: action.payload,
        fetching: false,
      };

    default:
      return state;
  }
};
