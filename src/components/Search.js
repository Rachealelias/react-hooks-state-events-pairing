import  React, {useState} from "react";

function Search({comments}){
const[search, setSearch] = useState("")



function handleSearch(search){
   // debugger
    const findComment = comments.filter((comment) => comment.search !==search);
    setSearch(findComment)
   
}

//function handleSubmit(event){
  //  event.preventDefault();
///}
 
return(
     //<form onSubmit={handleSubmit}>
     <div>
         <input type="text"
         placeholder="username"
         value= {search}
         onChange={(e) => setSearch(e.target.value)}
         />
         <button onClick={handleSearch}> search </button>
         <h2></h2>
     </div>
     //</form>
 )
}
export default Search