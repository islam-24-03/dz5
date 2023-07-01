import {types} from "../types.js";
import axios from "axios";

const initialState = {
    post:[]
}

export const postReducer = (state = initialState, action) => {
    if (action.type === types.VIEW_POST) {
        return {
            post: action.payload
        }
    }
    return state
}

const addPost = (payload) => ({type: types.VIEW_POST, payload})

export const fetchPhotos = () => {
    return dispatch => {
        axios.get('https://jsonplaceholder.typecode.com/posts')
            .then(response => dispatch(
                addPost(response.data)
            ))
    }
}