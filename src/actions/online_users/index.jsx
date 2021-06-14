export function addOnlineUser(data) {
  return function(dispatch) {
    return dispatch({ type: 'ADD_ONLINE_USER', data: data });
  }
}

export function removeOnlineUser(user_id) {
  return function(dispatch) {
    return dispatch({ type: 'REMOVE_ONLINE_USER', user_id });
  }
}

export function emptyOnlineUser() {
  return function(dispatch) {
    return dispatch({ type: 'EMPTY_ONLINE_USER' });
  }
}

