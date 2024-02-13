export enum PostsAction{
    FETCH_POSTS = 'FETCH_POSTS',
    FETCH_POSTS_SUCCESS = 'FETCH_POSTS_SUCCESS',
    FETCH_POSTS_ERROR = 'FETCH_POSTS_ERROR'
  }
  
export  interface IPosts{
    posts: any[];
    error: null| string;
    loading: boolean
  }
  
  interface IFetchActionPosts{
    type: PostsAction.FETCH_POSTS
  }
  
  interface IFetchActionErrorPosts{
    type: PostsAction.FETCH_POSTS_ERROR
    payload: string
  }
  
  interface IFetchActionSuccessPosts{
    type: PostsAction.FETCH_POSTS_SUCCESS
    payload: any[]
  }
  
 export type IActionPost = IFetchActionPosts | IFetchActionErrorPosts | IFetchActionSuccessPosts