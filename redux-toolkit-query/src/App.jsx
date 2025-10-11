import { useState } from 'react';
import './App.css'
import { useGetPostsQuery, useAddPostMutation } from './app/api/apiSlice'

function App() {

  const { data, error, isLoading } = useGetPostsQuery();
  const [addPost] = useAddPostMutation();

  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const post = {
      id: Date.now(),
      title: title,
      body: body,
    }
    addPost(post);
    setTitle("");
    setBody("");
  }

  return (
    <div>
      <h1>Posts</h1>

      <form onSubmit={handleSubmit}>
        <input type="text" name="" id="" placeholder='Title' value={title} onChange={(e) => setTitle(e.target.value)} />
        <input type="text" name="" id="" placeholder='Body' value={body} onChange={(e) => setBody(e.target.value)} />
        <button type="submit">Submit</button>
      </form>


      {isLoading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      {data && (
        <div>
          {data?.map((post) => {
            const {id, title, body} = post;
            return (
              <div key={id}>
                <h4>{title}</h4>
                <p>{body}</p>
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}

export default App
