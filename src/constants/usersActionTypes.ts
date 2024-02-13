export enum UsersAction{
    FETCH_USERS = 'FETCH_USERS',
    FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS',
    FETCH_USERS_ERROR = 'FETCH_USERS_ERROR'
  }
  
  export  interface IUsers{
    users: any[];
    error: null| string;
    loading: boolean
  }
  
  interface IFetchActionUsers{
    type: UsersAction.FETCH_USERS
  }
  
  interface IFetchActionErrorUsers{
    type: UsersAction.FETCH_USERS_ERROR
    payload: string
  }
  
  interface IFetchActionSuccessUsers{
    type: UsersAction.FETCH_USERS_SUCCESS
    payload: any[]
  }
  
  export type IActionUser = IFetchActionUsers | IFetchActionErrorUsers | IFetchActionSuccessUsers
  
  
  
  
  