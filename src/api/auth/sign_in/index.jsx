import axios from 'axios';

class SignIn {
  static verify(data) {
    return axios.post(`${process.env.REACT_APP_API_URL}/api/login`, data).catch( error => {
      return error.response
    });
  }
  static does_exist(email) {
    return axios.get(`${process.env.REACT_APP_API_URL}/api/does_employer_exist?email=${email}`).catch( error => {
      return error.response
    });
  }
}


export default SignIn