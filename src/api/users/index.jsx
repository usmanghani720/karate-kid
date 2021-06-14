import API from './../index';

class ViewUser {
  static fetch(id) {
    return API.get(`/api/v1/users/${id}.json`).catch(
      error => { return error; }
    );
  }
  static update(data) {
    return API.post(`/api/v1/users.json`, data).catch(
      error => { return error; }
    );
  }
  static get(user_id) {
    return API.get(`/api/v1/users/${user_id}.json`).catch(
      error => { return error; }
    );
  }
  static update_password(data) {
    return API.patch(`/api/v1/users/${0}.json`, data).catch(
      error => { return error; }
    );
  }
  static current() {
    return API.get('/api/v1/current_user/me.json').catch(
      error => { return error }
    );
  }

  static check_email(data) {
    return API.post(`/api/v1/check_email.json`, data).catch( error => {
      return error.response
    });
  }

  static check_user_role(data) {
    return API.post(`/api/v1/check_user_role.json`, data).catch( error => {
      return error.response
    });
  }
  static check_user(data) {
    return API.post(`/api/v1/check_user.json`, data).catch( error => {
      return error.response
    });
  }

  static get_user_email_by_token(data) {
    return API.post(`/api/v1/get_user_email_by_token.json`, data).catch( error => {
      return error.response
    });
  }

  static get_user(data) {
    return API.post(`/api/v1/get_user.json,`, data);
  }

  static get_online_users() {
    return API.get(`/api/v1/get_online_users.json`);
  }

  static remove(user_id) {
    return API.delete(`/api/v1/users/${user_id}.json`);
  }

}

export default ViewUser
