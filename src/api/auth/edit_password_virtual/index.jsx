import API from '../../index';

class EditPasswordVirtual {
  static verify(data) {
    return API.patch("/api/v1/passwords.json", data).catch( error => {
      return error.response.data
    });
  }
}

export default EditPasswordVirtual
