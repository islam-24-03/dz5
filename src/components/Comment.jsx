import React from "react";

const Comment = ({сomments}) => {
    return (
        <div>
            {comments?.map((i) => <div key={i?.id}>
                <p>{i?.body}</p>
            </div>)}
        </div>
    );
};

export default Comment;