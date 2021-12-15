import  React, {useState} from "react";
import Comment from "./Comment";

function Search({comments}){
    //console.log(comments)
const[search, setSearch] = useState("")
//let findComment =[]


function handleSubmit(event){
    event.preventDefault();
    //console.log(event)
    //const searchComment = event.target[0].value
    const findComment = comments.filter((comment) => comment.user ===search);
     console.log(findComment)
     //setSearch(findComment)
    
}

// const handleDisplay = findComment.map((comment) => (
//     <Comment key={comment.id} user={comment.user} userComment={comment.comment} />
// ))
 
return(
     <form onSubmit={handleSubmit}>
     
         <input type="text"
         placeholder="username"
         value= {search}
         onChange={(e) => setSearch(e.target.value)}
         />
         <button> search </button>
        <h2></h2>
     </form>
 )
}
export default Search