export default function AvatarReducer(state = { avatar: {} }, action) {
  switch (action.type) {
    case "AVATAR_RESPONSE_CHANGE":
      return { avatar: action.data.file };
    case "CLEAR_AVATAR_RESPONSE":
      return { avatar: {} };
    default:
      return state;
  }
}
