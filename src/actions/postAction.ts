import { Dispatch } from "redux"
import { IActionPost, PostsAction } from "../constants/postsActionTypes"


export const fetchPosts  = () => async(dispatch: Dispatch<IActionPost>) =>{
    try{
        dispatch({type: PostsAction.FETCH_POSTS})
        await fetch('https://jsonplaceholder.org/posts').then((response)=>response.json()).then((data) => dispatch({type: PostsAction.FETCH_POSTS_SUCCESS, payload: data}))
    } catch(error){
        dispatch({type: PostsAction.FETCH_POSTS_ERROR, payload: "Произошла ошибка при загрузке постов"})
    }
}