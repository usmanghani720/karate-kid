import axios from 'axios';

class NewPassword {
  static verify(data) {
    return axios.post(`${process.env.REACT_APP_API_URL}/api/forget_password_api`, data).catch( error => {
      return error.response
    });
  }
}

export default NewPassword
