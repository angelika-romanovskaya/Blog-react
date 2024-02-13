import { IActionPost, IPosts, PostsAction } from "../constants/postsActionTypes";

const initialStatePosts:IPosts = {
  posts:[],
  error: null,
  loading: true
};
  
export const postsReducer=(state = initialStatePosts, action:IActionPost):IPosts=> {
  switch (action.type) {
    case PostsAction.FETCH_POSTS:
      return {error:null, posts:[], loading: true};
    case PostsAction.FETCH_POSTS_SUCCESS:
      return {error:null, posts:action.payload, loading: false};
    case PostsAction.FETCH_POSTS_ERROR:
      return {error:action.payload, posts:[], loading:false};
    default:
      return state;
  }
}
