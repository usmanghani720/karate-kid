import API from './../index';

export default class NotificationList {
  static fetch() {
    return API.get('/api/v1/notifications.json').catch(
      error => { return error; }
    );
  }

  static fetch_all() {
    return API.get('/api/v1/all_notifications.json').catch(
      error => { return error; }
    );
  }

  static update(notification_id) {
    return API.put(`/api/v1/notifications/${notification_id}.json`).catch(
      error => { return error; }
    );
  }

  static mark_all_as_read() {
    return API.get(`/api/v1/mark_all_read.json`).catch(
      error => { return error; }
    );
  }

  static get_notifications(user_id) {
    return API.get(`/api/v1/get_notifications.json?id=${user_id}`);
  }

}
