import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";
import registerReducer from "./auth/registrations";
import logInReducer from "./auth/sign_in";
import newPasswordReducer from "./auth/new_password";
import editPasswordReducer from "./auth/edit_password";
import authReducer from "./auth";
import AvatarReducer from "./avatar";
import userViewReducer from "./users";
import notificationsReducer from "./notifications";
import UsersChatroomReducer from "./users_chatroom";
import ChatMessagesReducer from "./chat_messages";
import ReadMessagesReducer from "./read_messages";
import UnreadMessagesReducer from "./unread_messages";
import MyChatroomsReducer from "./my_chatrooms";
import AllChatroomsReducer from "./all_chatrooms";
import ChatroomReducer from "./chatroom";
import OnlineUsersReducer from "./online_users";
import UnreadChatroomMessagesReducer from "./unread_chatroom_messages";

export default combineReducers({
  ChatroomReducer: ChatroomReducer,
  chat_messages_reducer: ChatMessagesReducer,
  read_messages_reducer: ReadMessagesReducer,
  unread_messages_reducer: UnreadMessagesReducer,
  userchatroom_reducer: UsersChatroomReducer,
  notifications_reducer: notificationsReducer,
  user_view_reducer: userViewReducer,
  avatar: AvatarReducer,
  auth: authReducer,
  routing: routerReducer,
  registerReducer,
  logInReducer,
  newPasswordReducer,
  editPasswordReducer,
  my_chatrooms_reducer: MyChatroomsReducer,
  all_chatrooms_reducer: AllChatroomsReducer,
  online_users_reducer: OnlineUsersReducer,
  unread_chatroom_messages_reducer: UnreadChatroomMessagesReducer,
});
