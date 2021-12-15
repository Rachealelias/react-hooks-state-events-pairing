import React from "react";
import  Comment  from "./Comment"
import Search from "./Search.js";

const Comments = ({comments}) => {

    const commentsList = comments.map((comment) => (
        <Comment key={comment.id} user={comment.user} userComment={comment.comment} />
    ))
    const totalComments = comments.length
    return(
        <div>
            <h1>{totalComments} comments</h1>
            <Search comments={comments}/>
            <div id="comments">{commentsList}</div>

        </div>
    )
}

export default Comments