import MyChatrooms from './../../api/my_chatrooms';

export function fetchMyChatrooms(data) {
  return function(dispatch) {
    return MyChatrooms.fetch(data).then(response => {
      dispatch(sendMyChatroomsStatus(response.data));
    })

  }
}

function sendMyChatroomsStatus(data) {
  if( "errors" in data )  {
    return { type: "ERROR_MY_CHATROOMS", data };
  } else{
    return { type: "FETCH_MY_CHATROOMS", chatrooms: data };
  }
}

export function assignMyChatrooms(data) {
	return function(dispatch) {
		return dispatch({type: "ASSIGN_MY_CHATROOMS", data: data});
	}
}

export function emptyMyChatrooms() {
	return function(dispatch) {
		return dispatch({type: "EMPTY_MY_CHATROOMS"});
	}
}

export function getUnreadMessages(id) {
  return function(dispatch) {
    return MyChatrooms.getUnreadMessages(id).then((res) => (
      dispatch({type: 'GET_UNREAD_MESSAGES', ...res})
    ))
  }
}

