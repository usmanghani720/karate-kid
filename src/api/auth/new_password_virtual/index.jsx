import API from '../../index';

class NewPasswordVirtual {
  static verify(data) {
    return API.post("/api/v1/passwords.json", data).catch( error => {
      return error.response.data
    });
  }
}

export default NewPasswordVirtual
