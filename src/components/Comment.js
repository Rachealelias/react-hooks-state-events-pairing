import React,{useState} from "react";

function Comment({user, userComment}){
   const [likeComment, setLikeComment] = useState(0)
   const [dislikeComment, setDislikeComment] = useState(0)

   function addLike(){
    setLikeComment((likeComment) => likeComment + 1)
}

function addDislike(){
    setDislikeComment((dislikeComment) => dislikeComment + 1)
}

    return(

        <div className="comment-list">
            <h3>{user} <button>delete</button></h3>
            <p>{userComment}</p>
            <button onClick={addLike} > {likeComment} 👍 </button>
            <button onClick={addDislike}> {dislikeComment} 👎</button>
        </div>
    )
}

export default Comment;