import { IActionUser, IUsers, UsersAction } from "../constants/usersActionTypes";

const initialStateUsers:IUsers = {
  users:[],
  error: null,
  loading: true
};
  
export const usersReducer=(state = initialStateUsers, action:IActionUser):IUsers=> {
  switch (action.type) {
    case UsersAction.FETCH_USERS:
      return {error:null, users:[], loading: true};
    case UsersAction.FETCH_USERS_SUCCESS:
      return {error:null, users:action.payload, loading: false};
    case UsersAction.FETCH_USERS_ERROR:
      return {error:action.payload, users:[], loading:false};
    default:
      return state;
  }
}
