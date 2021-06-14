import NewPassword from './../../../api/auth/new_password';
import { getOr } from 'lodash/fp';

export function checkLoggedIn(data) {
  return function(dispatch) {
    return NewPassword.verify(data).then(response => {
      dispatch(verifyLoggedInResponse(response.data));
      return Promise.resolve(response.data);
    }).catch( error => {
    });
  }
}

export function verifyLoggedInResponse(res) {
  if (getOr('', 'success', res) === false) {
    return { type: 'ERROR_LOGGED_IN', data: res }
  } else {
    return { type: 'LOGGED_IN_SUCCESS', data: res }
  }
}
