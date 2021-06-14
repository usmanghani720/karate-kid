export default function UnreadChatroomMessagesReducer(
    state = { chatroom_unread_messages: 0 },
    action
  ) {
    switch (action.type) {
      case "GET_UNREAD_MESSAGES":
        return action.data;
      default:
        return state;
    }
  }
  