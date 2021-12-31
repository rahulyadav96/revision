import './App.css';
import { Comment } from './components/Comments';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
function App() {
  const [posts, setPosts] = useState();
  useEffect(() => {
    axios.get("http://localhost:3001/posts")
      .then(res => {
        setPosts(res.data)
      })
      .catch(err => console.log(err))
  }, [])
  return (
    <div className="App">
      <div style={{width:"80%", margin:"auto"}}>

        {
          posts?.map(post => <Comment key={post.id} data={post} />)
        }
      </div>

    </div>
  );
}

export default App;
