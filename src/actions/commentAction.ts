import { Dispatch } from "redux"
import { IActionComment, CommentsAction } from "../constants/commentsTypes"


export const fetchComments  = () => async(dispatch: Dispatch<IActionComment>) =>{
    try{
        dispatch({type: CommentsAction.FETCH_COMMENTS})
        await fetch('https://jsonplaceholder.org/comments').then((response)=>response.json()).then((data) => dispatch({type: CommentsAction.FETCH_COMMENTS_SUCCESS, payload: data}))
    } catch(error){
        dispatch({type: CommentsAction.FETCH_COMMENTS_ERROR, payload: "Произошла ошибка при загрузке комментариев"})
    }
}