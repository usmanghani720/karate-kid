import Registrations from './../../../api/auth/registrations';

export function registerUser(user_data) {
  return function(dispatch) {
    return Registrations.save(user_data).then(response => {
      dispatch(loadRegisterUser(response.data));
    }).catch(error => {
      throw(error);
    });
  }
}

export function loadRegisterUser(data) {
  if("errors" in data){
    return { type: 'ERROR_REGISTER_USER', data }
  } else {
    return { type: 'LOAD_REGISTER_USER', data }
  }
}