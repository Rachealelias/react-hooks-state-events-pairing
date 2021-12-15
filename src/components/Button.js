import React ,{useState}from "react"


const Button = ({upvote, downvote}) => {
    const [upCount, setUpCount] = useState(upvote)
    const [downCount, setDownCount] = useState(downvote)


    function addCount(){
        setUpCount((upCount) => upCount + 1)
    }

    function addDownCount(){
        setDownCount((downCount) => downCount + 1)
    }


 


    return (
        <div>
           <button onClick= {addCount}>{upCount} 👍</button> 
           <button onClick = {addDownCount}>{downCount} 👎</button>
        
        </div>
    )
    // <button onClick={() => setDownCount(downcount  + 1)}>{downCount}</button>
}

export default Button
