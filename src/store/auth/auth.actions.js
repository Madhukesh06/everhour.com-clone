import axios from "axios";
import { Navigate } from "react-router-dom";
import { LOGIN_ERROR, LOGIN_LOADING, LOGIN_SUCCESS, LOGOUT_SUCCESS, REGISTER_ERROR, REGISTER_LOADING, REGISTER_SUCCESS } from "./auth.types";

export const loginAction = (creds) => async (dispatch) => {
  dispatch({ type: LOGIN_LOADING });
  try {
    let response = await axios.post("https://everhour-backend.onrender.com/users/login", creds);
    dispatch({ type: LOGIN_SUCCESS, payload: response.data });
    // return <Navigate to="/" />;
    return response.data;
  } catch (e) {
    dispatch({ type: LOGIN_ERROR });
  }
};


export const logoutAction = () => ({type: LOGOUT_SUCCESS})

export const registerAction = (creds = {
    "email": "eve.holt@reqres.in",
    "password": "pistol"
}) => async (dispatch) => {
    dispatch({type: REGISTER_LOADING})
    try{
        let response = await axios.post("https://everhour-backend.onrender.com/users/signup", creds)
        dispatch({type: REGISTER_SUCCESS, payload: response.data})
        return response.data
    }catch(e){
        dispatch({type: REGISTER_ERROR})
    }   
}