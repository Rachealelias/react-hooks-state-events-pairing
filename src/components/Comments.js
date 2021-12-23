import React,{useState} from "react";
import  Comment  from "./Comment"
import Search from "./Search.js";

const Comments = ({comments}) => {
    const[search, setSearch] = useState("")
    const [commentList, setCommentsList] = useState(comments)
    const commentsList = commentList
    .filter(comment => search === "" || comment.user.toLowerCase().startsWith(search.toLowerCase()))
    .map((comment) => <Comment key={comment.id} user={comment.user} userComment={comment.comment} id={comment.id} handleDelete={handleDelete}/>)
    

    function handleDelete(id) {
    const comentList = commentList.filter((comment) => comment.id !==id)
    setCommentsList(comentList);
    }
    
    const totalComments = comments.length
    return(
        <div>
            <h1>{totalComments} comments</h1>
            <Search setSearch={setSearch} comments={comments}/>
            <div id="comments">{commentsList}</div>

        </div>
     //const findComment = comments.filter((comment) => comment.user ===search);
    )
}

export default Comments