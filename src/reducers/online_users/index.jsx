const initialState = {
  online_users:
    JSON.parse(
      sessionStorage.getItem("https://virtual.militaryx.com:state")
    ) === null
      ? []
      : JSON.parse(
          sessionStorage.getItem("https://virtual.militaryx.com:state")
        ).online_users_reducer.online_users,
};
export default function OnlineUsersReducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_ONLINE_USER":
      let foundIndex = state.online_users.findIndex(
        (x) => x.user === action.data.user
      );
      return {
        ...state,
        online_users:
          foundIndex === -1
            ? state.online_users.concat(action.data)
            : state.online_users,
      };
    case "REMOVE_ONLINE_USER":
      return {
        ...state,
        online_users: state.online_users.filter(
          ({ user }) => user !== action.user_id
        ),
      };
    case "EMPTY_ONLINE_USER":
      return {
        ...state,
        online_users: [],
      };
    default:
      return state;
  }
}
