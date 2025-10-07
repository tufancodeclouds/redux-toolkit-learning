import CounterView from './app/features/counter/counterView'
import PostsView from './app/features/posts/postsView'
import './App.css'

function App() {
  return (
    <>
      <h2>Counter App</h2>
      <CounterView />
      <h2>Posts App</h2>
      <PostsView />
    </>
  )
}

export default App
