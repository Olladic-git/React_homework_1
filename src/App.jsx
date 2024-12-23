import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, useSelectValue } from "./store/slice/counterSlice";
import { useEffect } from "react";
import { fetchPosts, 
         useSelectPosts, 
         userSelectPostsStatus, 
         useSelectPostsError } 
         from "./store/slice/postsSlice";

function App() {
  const dispatch = useDispatch();
  const count = useSelector(useSelectValue);
  const posts = useSelector(useSelectPosts);
  const status = useSelector(userSelectPostsStatus);
  const error= useSelector(useSelectPostsError);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchPosts())
    }
  }, [])

  if (status === 'loading') {
    return (
      <div>loading ...</div>
    )
  }
  if (status === 'failed') {
    return <div>{error}</div>
  }

  const inc = () => {
    dispatch(increment())
  }

  return (
    <div className="container">
      <h1>Class work</h1>
      <h2>{count}</h2>
      <button onClick={inc}>Inc +</button>
      <button onClick={() => dispatch(decrement())}>Dec -</button>
      <ul>
        {posts.map(el => <li key={el.id}>{el.title}</li>)}
      </ul>
    </div>
  )
}

export default App;