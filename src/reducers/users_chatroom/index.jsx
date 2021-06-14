const initial_state = {
  chatrooms:
    JSON.parse(
      sessionStorage.getItem("https://virtual.militaryx.com:state")
    ) === null
      ? []
      : JSON.parse(
          sessionStorage.getItem("https://virtual.militaryx.com:state")
        ).userchatroom_reducer.chatrooms,
};

export default function UsersChatroomReducer(state = initial_state, action) {
  switch (action.type) {
    case "OPEN_USER_CHATROOM":
      let foundIndex = state.chatrooms.findIndex(
        (x) => x.chatroom_id == action.data.chatroom_id
      );
      let chatrooms =
        foundIndex === -1
          ? state.chatrooms.concat(action.data)
          : state.chatrooms;
      return {
        ...state,
        chatrooms: chatrooms,
      };
    case "REMOVE_USER_CHATROOM":
      let updatedChatrooms = state.chatrooms.filter(
        ({ chatroom_id }) =>
          parseInt(chatroom_id) !== parseInt(action.chatroom_id)
      );
      return {
        ...state,
        chatrooms: updatedChatrooms,
      };
    case "CLEAR_USER_CHATROOM":
      return {
        ...state,
        chatrooms: [],
      };
    default:
      return state;
  }
}
