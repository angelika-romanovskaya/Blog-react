import { AuthAction, IActionAuth, IAuth } from "../constants/authTypes";

const initialStateAuth:IAuth = {
  error: '',
  user: {},
  auth: false
};
  
export const authReducer=(state = initialStateAuth, action:IActionAuth):IAuth=> {
  switch (action.type) {
    case AuthAction.AUTH_USER_SUCCESS:
      return {error:'', user: action.payload.user, auth: true};
    case AuthAction.AUTH_USER_ERROR:
      return {error:action.payload, user: {}, auth: false};
    case AuthAction.AUTH_USER_LOGOUT:
        return {error: '', user: {}, auth: false};
    default:
      return state;
  }
}
