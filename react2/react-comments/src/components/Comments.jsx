import "./comment.css"
export const Comment = ({data})=> {
    return (
        <div className="card">
          <div className="auth">
            <span>{data.author}</span>
            <span> {data.points} points</span>
            <span> {data.timestamp}</span>

          </div>
          <p className="post">{data.body}</p>  
          <div className="reply">
            <button>Reply</button>
            <button>Give Award</button>
            <button>Share</button>
            <button>Report</button>
            <button>Save</button>
          </div>
          {data.replies?.map(ele=><Comment key= {ele.id}data={ele} />)}
        </div>
    )
}
