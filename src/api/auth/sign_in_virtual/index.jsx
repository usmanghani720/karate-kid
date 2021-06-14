import API from '../../index';

class SignInVirtual {
  static verify(data) {
    return API.post("/sign_in.json", data).catch( error => {
      return error.response.data
    });
  }
}

export default SignInVirtual
