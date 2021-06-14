import axios from 'axios';

class SignInWithToken {
  static verify(token) {
    return axios.post(`${process.env.REACT_APP_API_URL}/employer/login_with_token/${token}`).catch( error => {
      return error.response
    });
  }
}


export default SignInWithToken