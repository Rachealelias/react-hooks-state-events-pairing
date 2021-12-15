import video from "../data/video.js";
import Button from "./Button.js";
import Comments from "./Comments.js";
import {useState} from "react"


function App() {
  console.log("Here's your data:", video);
  const [isHide, setIsHide] = useState(false)

  return (
    <div className="App">
      <iframe
        width="919"
        height="525"
        src={video.embedUrl}
        frameBorder="0"
        allowFullScreen
        title={video.title}
      />
      <h1>{video.title}</h1> 
      <p>{video.views} Views | Uploaded  {video.createdAt}</p>
      <Button upvote= {video.upvotes} downvote={video.downvotes}/>
      <button onClick={() => setIsHide(!isHide)}>{isHide ? "Hide" : "Show"} Comments</button>
       {isHide ? <Comments comments={video.comments} /> : null}
      
    </div>
  );
}

export default App;
