export enum CommentsAction{
    FETCH_COMMENTS = 'FETCH_COMMENTS',
    FETCH_COMMENTS_SUCCESS = 'FETCH_COMMENTS_SUCCESS',
    FETCH_COMMENTS_ERROR = 'FETCH_COMMENTS_ERROR'
  }
  
  export  interface IComments{
    comments: any[];
    error: null| string;
    loading: boolean
  }
  
  interface IFetchActionComments{
    type: CommentsAction.FETCH_COMMENTS
  }
  
  interface IFetchActionErrorComments{
    type: CommentsAction.FETCH_COMMENTS_ERROR
    payload: string
  }
  
  interface IFetchActionSuccessComments{
    type: CommentsAction.FETCH_COMMENTS_SUCCESS
    payload: any[]
  }
  
  export type IActionComment = IFetchActionComments | IFetchActionErrorComments | IFetchActionSuccessComments
  
  
  
  
  