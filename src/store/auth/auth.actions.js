import axios from "axios";
import {
   LOGIN_ERROR,
   LOGIN_LOADING,
   LOGIN_SUCCESS,
   LOGOUT_SUCCESS,
   REGISTER_ERROR,
   REGISTER_LOADING,
   REGISTER_SUCCESS,
} from "./auth.types";

const everhourUser = localStorage.getItem("everhourUser") || {};

export const loginAction = (creds) => async (dispatch) => {
   dispatch({ type: LOGIN_LOADING });
   try {
      let response = await axios.post(
         "https://everhour-backend-production.up.railway.app/users/login",
         creds
      );
      dispatch({ type: LOGIN_SUCCESS, payload: response.data });
      localStorage.setItem("everhourUser", JSON.stringify(creds));
      return true;
   } catch (e) {
      dispatch({ type: LOGIN_ERROR });
      return false;
   }
};

export const logoutAction = () => ({ type: LOGOUT_SUCCESS });

export const registerAction =
   (
      creds = {
         email: "eve.holt@reqres.in",
         password: "pistol",
      }
   ) =>
   async (dispatch) => {
      dispatch({ type: REGISTER_LOADING });
      try {
         let response = await axios.post(
            "https://everhour-backend-production.up.railway.app/users/signup",
            creds
         );
         dispatch({ type: REGISTER_SUCCESS, payload: response.data });
         return true;
      } catch (e) {
         dispatch({ type: REGISTER_ERROR });
         return false;
      }
   };
