import API from '../../index';

class ChangePasswordAPI {
  static verify(data) {
    return API.post("/api/v1/update_seeker_password.json", data).catch( error => {
      return error.response.data
    });
  }
}

export default ChangePasswordAPI
