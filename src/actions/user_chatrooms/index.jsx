export function openUserChatroom(chatroom_obj) {
  return function(dispatch) {
    dispatch({type: 'OPEN_USER_CHATROOM', data: chatroom_obj});
  }
}

export function removeUserChatroom(chatroom_id) {
  return function(dispatch) {
    dispatch({type: 'REMOVE_USER_CHATROOM', chatroom_id});
  }
}


export function clearUserChatroom() {
  return function(dispatch) {
    dispatch({type: 'CLEAR_USER_CHATROOM'});
  }
}


