import axios from 'axios';

class EditPassword {
  static verify(data) {
    return axios.post(`${process.env.REACT_APP_API_URL}/api/save_new_password`, data).catch( error => {
      return error.response
    });
  }
}


export default EditPassword