import  React from "react";

function Search({ setSearch}){

function handleSubmit(event){
    event.preventDefault();
     setSearch(event.target[0].value)

    }
 
return(
     <form onSubmit={handleSubmit}>
      <input type="text"
         placeholder="username"
         />
         <button> search </button>
     </form>
 )
}
export default Search