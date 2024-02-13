import { Dispatch } from "redux"
import { IActionUser, UsersAction } from "../constants/usersActionTypes"


export const fetchUsers  = () => async(dispatch: Dispatch<IActionUser>) =>{
    try{
        dispatch({type: UsersAction.FETCH_USERS})
        await fetch('	https://jsonplaceholder.org/users').then((response)=>response.json()).then((data) => dispatch({type: UsersAction.FETCH_USERS_SUCCESS, payload: data}))
    } catch(error){
        dispatch({type: UsersAction.FETCH_USERS_ERROR, payload: "Произошла ошибка при загрузке пользователей"})
    }
}