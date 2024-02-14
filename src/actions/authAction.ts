import { Dispatch } from "redux"
import { AuthAction, IActionAuth } from "../constants/authTypes"
import { store } from ".."


export const authUser  = (username, password) => (dispatch: Dispatch<IActionAuth>) =>{
    const users = store.getState().users.users
    const authUser = users.filter(user => user.login.username === username && user.login.password === password);
    console.log(authUser.length)
    if(authUser.length === 0) dispatch({type: AuthAction.AUTH_USER_ERROR, payload: "Произошла ошибка авторизации! Проверьте введенные логин и пароль."})
    else dispatch({type: AuthAction.AUTH_USER_SUCCESS, payload: {user: authUser[0]}})
}

export const authUserLogOut  = () => (dispatch: Dispatch<IActionAuth>) =>{
    dispatch({type: AuthAction.AUTH_USER_LOGOUT})
}