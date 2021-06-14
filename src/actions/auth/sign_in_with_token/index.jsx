import SignInWithToken from './../../../api/auth/sign_in_with_token';
import { getOr } from 'lodash/fp';

export function checkLoggedIn(token) {
  return function(dispatch) {
    return SignInWithToken.verify(token).then(response => {
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
