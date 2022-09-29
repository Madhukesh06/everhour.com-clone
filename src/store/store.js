import { applyMiddleware, combineReducers, compose, legacy_createStore } from "redux"
import thunk from "redux-thunk"
import authReducer from "./auth/auth.reducer"

const rootReducer = combineReducers({
    auth: authReducer
})

const createComposer = window.__REDUX_DEVTOOLS_EXTENSION__COMPOSE__ || compose
export const store = legacy_createStore(rootReducer, createComposer(applyMiddleware(thunk)))