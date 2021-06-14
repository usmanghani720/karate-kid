import API from '../../index';

class SignOutVirtual {
  static destroy() {
    return API.get("/api/v1/sign_out.json").catch( error => {
      return error.response.data
    });
  }
  static destroy_existing_connections() {
    return API.get("/api/v1/destroy_existing_connections.json").catch( error => {
      return error.response
    });
  }
}

export default SignOutVirtual
