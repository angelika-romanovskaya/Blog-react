export enum AuthAction{
    AUTH_USER_SUCCESS = 'AUTH_USER_SUCCESS',
    AUTH_USER_ERROR = 'FETCH_COMMENTAUTH_USER_ERRORS_SUCCESS',
    AUTH_USER_LOGOUT = 'AUTH_USER_LOGOUT',
  }
  
  export  interface IAuth{
    error: string;
    user: any
    auth: boolean
  }

  interface IAuthActionError{
    type: AuthAction.AUTH_USER_ERROR
    payload: string
  }
  
  interface IAuthActionSuccess{
    type: AuthAction.AUTH_USER_SUCCESS
    payload: {
        user: any
    }
  }

  interface IAuthActionLogOut{
    type: AuthAction.AUTH_USER_LOGOUT
  }
  
  export type IActionAuth = IAuthActionError | IAuthActionSuccess | IAuthActionLogOut
  
  
  
  
  