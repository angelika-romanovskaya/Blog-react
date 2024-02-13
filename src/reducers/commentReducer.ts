import { IActionComment, IComments, CommentsAction } from "../constants//commentsTypes";

const initialStateUsers:IComments = {
  comments:[],
  error: null,
  loading: true
};
  
export const commentsReducer=(state = initialStateUsers, action:IActionComment):IComments=> {
  switch (action.type) {
    case CommentsAction.FETCH_COMMENTS:
      return {error:null, comments:[], loading: true};
    case CommentsAction.FETCH_COMMENTS_SUCCESS:
      return {error:null, comments:action.payload, loading: false};
    case CommentsAction.FETCH_COMMENTS_ERROR:
      return {error:action.payload, comments:[], loading:false};
    default:
      return state;
  }
}
