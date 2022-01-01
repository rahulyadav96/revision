import { useState } from "react"
import "./comment.css"
export const Comment = ({data})=> {
  const [repl,setRepl] = useState("");
  const [commBox,setCommBox] = useState("hide");
  const handleClick = ()=>{
    (commBox == "hide")?setCommBox("show"):setCommBox("hide")
  }
  const addComments = ()=>{
    
  }
    return (
        <div className="card">
          <div className="auth">
            <span>{data.author}</span>
            <span> {data.points} points</span>
            <span> {data.timestamp}</span>

          </div>
          <p className="post">{data.body}</p>  
          <div className="reply">
            <button onClick={handleClick}>Reply</button>
            <button>Give Award</button>
            <button>Share</button>
            <button>Report</button>
            <button>Save</button>
          </div>
          <div className={"commentBox "+commBox}>
            <input type="text" name="comment" onChange={(e)=>setRepl(e.target.value)} value={repl}/>
            <button onClick={addComments}>add Comment</button>
          </div>
          {data.replies?.map(ele=><Comment key= {ele.id}data={ele} />)}
        </div>
    )
}
