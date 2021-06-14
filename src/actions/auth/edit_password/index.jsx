import EditPassword from './../../../api/auth/edit_password';
import { getOr } from 'lodash/fp';

export function checkLoggedIn(data) {
  return function(dispatch) {
    return EditPassword.verify(data).then(response => {
      dispatch(verifyLoggedInResponse(response));
      return Promise.resolve(response.data);
    })
  }
}

export function verifyLoggedInResponse(response) {
  if (getOr('', 'success', response) === false) {
    return { type: 'ERROR_EDIT_PASSWORD_IN', data: response.errors }
  } else {
    return { type: 'EDIT_PASSWORD_SUCCESS', data: response.data }
  }
}
