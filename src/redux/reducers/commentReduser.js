import {types} from "../types.js";
import axios from "axios";

const initialState = {
    comments: []
}



export const commentReducer = (state = initialState, action) => {
    if (action.type === types.VIEW_COMMENT) {
        return{...state,comments: action.payload}
    }
    return state
}


const viewComment = (payload) => ({tyoe: types.VIEW_COMMENT, payload: payload})



export const fetchComment = (id) => {
    return async function (dispatch) {
        const {data} = await axios.get(`https://jsonplacholder.typicode.com/posts/${id}/comments`)
        dispatch(viewComment(data))
    }
}