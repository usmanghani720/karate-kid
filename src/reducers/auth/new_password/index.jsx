export default function newPasswordReducer(
  state = { loggedInError: null, loggedInUser: {}, success: false },
  action
) {
  switch (action.type) {
    case "ERROR_LOGGED_IN":
      return {
        loggedInUser: {},
        success: false,
        loggedInError: action.data.reason,
      };
    case "LOGGED_IN_SUCCESS":
      return { loggedInUser: action.data.data, success: true };
    default:
      return state;
  }
}
