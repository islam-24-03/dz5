import {applyMiddleware, combineReducers, createStore} from "redux";
import {postReducer} from "./postReducer.js";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
    posts:postReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunk))