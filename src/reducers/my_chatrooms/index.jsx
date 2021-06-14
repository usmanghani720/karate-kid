const initial_state = {
  my_chatrooms:
    JSON.parse(
      sessionStorage.getItem("https://virtual.militaryx.com:state")
    ) === null
      ? []
      : JSON.parse(
          sessionStorage.getItem("https://virtual.militaryx.com:state")
        ).my_chatrooms_reducer.my_chatrooms,
};

export default function MyChatroomsReducer(state = initial_state, action) {
  switch (action.type) {
    case "FETCH_MY_CHATROOMS":
      return {
        ...state,
        my_chatrooms: action.chatrooms,
      };
    case "ASSIGN_MY_CHATROOMS":
      return {
        ...state,
        my_chatrooms: action.data,
      };
    case "EMPTY_MY_CHATROOMS":
      return {
        ...state,
        my_chatrooms: [],
      };
    default:
      return state;
  }
}
