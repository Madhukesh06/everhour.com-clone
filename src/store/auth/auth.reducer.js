import React from 'react'
import { useNavigate } from 'react-router-dom';
import { LOGIN_ERROR, LOGIN_LOADING, LOGIN_SUCCESS, LOGOUT_SUCCESS, REGISTER_ERROR, REGISTER_LOADING, REGISTER_SUCCESS } from './auth.types';

const initialState = {
    loading: false,
    error:false,
    token: ""
}

let token = localStorage.getItem("token") || ""

const authReducer = (state=initialState, {type, payload}) => {
    switch (type) {
        case REGISTER_LOADING: {
          return {
            ...state,
            loading: true,
            error: false
          };
        }
        case REGISTER_ERROR: {
          return {
            ...state,
            loading: false,
            error: true
          };
        }
        case REGISTER_SUCCESS: {
          return {
            ...state,
            loading: false,
            error: false,
            token: payload.token
          };
        }
        case LOGIN_LOADING: {
          return {
            ...state,
            loading: true,
            error: false
          };
        }
        case LOGIN_ERROR: {
          return {
            ...state,
            loading: false,
            error: true
          };
        }
        case LOGIN_SUCCESS: {
          localStorage.setItem("token", payload.token);
          return {
            ...state,
            loading: false,
            error: false,
            token: payload.token
          };
        }
        case LOGOUT_SUCCESS: {
          localStorage.removeItem("token")
          return {
            ...state,
            loading: false,
            error: false,
            token: ""
          };
        }
        default: {
          return state;
        }
    }
}

export default authReducer
