import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {fetchPhotos} from "../redux/reducers/postReducer.js";
import Comment from "./Comment.jsx";

const Post = () => {
    const dispatch = useDispatch()
    const [post, setPost] = useState({})

    const onSubmit = () => dispatch(fetchPhotos())

    const posts = useSelector(state => state.posts.posts)
    const {comments} = useSelector(state => state.comments)

    const getComments = (id) => {
        setPost({...post, [id]: !post[id]})
        dispatch(fetchPhotos)
    }

    return (
        <div>
            <button onClick={onSubmit}>post</button>
            {
                posts &&
                <>
                    <h1>Posts</h1>
                    <ul>
                        {
                            posts?.map(item => <li key={item?.id}>
                                <button onClick={() => getComments(item?.id)} >{item?.title}</button>
                                {post[item?.id] && comments.length > 0 && (
                                    <Comment comments={comments}/>
                                )}
                            </li>)
                        }
                    </ul>
                </>
            }
        </div>
    );
};

export default Post;