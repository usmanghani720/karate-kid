import API from './../index';

class MyChatrooms {
  static fetch(data) {
    return API.post('/api/v1/get_my_chatrooms.json', data).catch(
      error => { return error; }
    );
  }
  static fetch_all() {
    return API.get('/api/v1/all_chatrooms.json').catch(
      error => { return error; }
    );
  }
  static getChatroomJob(id) {
    return API.get(`/api/v1/get_chatroom_job.json?id=${id}`).catch(
      error => { return error; }
    );
  }
  static getChatroom(id) {
    return API.get(`/api/v1/get_chatroom.json?id=${id}`).catch(
      error => { return error; }
    );
  }
  static getChatroomByJobApplication(id) {
    return API.get(`/api/v1/get_chatroom_by_job_application.json?id=${id}`).catch(
      error => { return error; }
    );
  }
  static getIncreasedTimeMessageCount(id) {
    return API.get(`/api/v1/get_increased_time_message_count.json?chatroom_id=${id}`).catch(
      error => { return error; }
    );
  }
  static getMessageCount(id) {
    return API.get(`/api/v1/get_message_count.json?chatroom_id=${id}`).catch(
      error => { return error; }
    );
  }

  static getUnreadMessages(id) {
    return API.get(`/api/v1/get_unread_messages.json?chatroom_id=${id}`).catch(
      error => { return error; }
    );
  }
}

export default MyChatrooms;
