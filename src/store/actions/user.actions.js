import * as keys from '../keys/user.key';
import ApiService from '../../services/ApiService';

export const fetchUsers = () => dispatch => {
  dispatch({
    type: keys.FETCH_USER_PENDING,
    payload: '',
  });
  ApiService.getUser()
    .then(response => {
      dispatch({
        type: keys.FETCH_USER_FULFILLED,
        payload: response.data,
      });
    })
    .catch(error => {
      dispatch({
        type: keys.FETCH_USER_REJECTED,
        payload: error,
      });
    });
};
