export function updateUserPhoto(data) {
	return function(dispatch) {
		return dispatch(loadUserPhoto(data));
	}
}

export function loadUserPhoto(data) {
    return { type: 'AVATAR_RESPONSE_CHANGE', data }
  
}

export function clearUserPhoto() {
  return function(dispatch) {
    return dispatch({ type: 'CLEAR_AVATAR_RESPONSE'});
  }
}
