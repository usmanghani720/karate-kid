import { isEmpty } from "lodash/fp";

const initial_state = {
  messages: [],
};

export default function ChatMessagesReducer(state = initial_state, action) {
  switch (action.type) {
    case "LOAD_CHAT_MESSAGES":
      if (!isEmpty(action.data)) {
        let index = state.messages.findIndex(
          (x) => x.chatroom_id == action.data[0].chatroom_id
        );
        if (index === -1) {
          let data = {};
          data["chatroom_id"] = action.data[0].chatroom_id;
          data["messages"] = action.data;
          state.messages.push(data);
        } else {
          let existingData = {};
          existingData["chatroom_id"] = action.data[0].chatroom_id;
          existingData["messages"] = action.data;
          state.messages[index] = existingData;
        }
      }
      return {
        ...state,
        messages: state.messages,
      };
    case "APPEND_CHAT_MESSAGE":
      let appendIndex = state.messages.findIndex(
        (x) => x.chatroom_id == action.data.chatroom_id
      );
      if (appendIndex > -1) {
        let dataAppend = {};
        dataAppend["chatroom_id"] = action.data.chatroom_id;
        let messages = state.messages[appendIndex].messages;
        if (messages.findIndex((x) => x.id == action.data.id) === -1) {
          messages = messages.concat(action.data);
        }
        dataAppend["messages"] = messages;
        state.messages[appendIndex] = dataAppend;
      } else {
        let newData = {};
        newData["chatroom_id"] = action.data.chatroom_id;
        newData["messages"] = [];
        newData["messages"].push(action.data);
        state.messages.push(newData);
      }
      return {
        ...state,
        messages: state.messages,
      };
    default:
      return state;
  }
}
