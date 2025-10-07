import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { fetchPosts } from './postsSlice'

const postsView = () => {

    const {isLoading, posts, error} = useSelector((state) => state.posts);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchPosts());
    }, [dispatch])

  return (
    <div>
        <h2>Posts</h2>
        {isLoading && <p>Loading...</p>}
        {error && <p>{error}</p>}
        {posts.length > 0 && posts.map(post => (
            <div key={post.id}>
                <h3>{post.title}</h3>
                <p>{post.body}</p>
            </div>
        ))}
    </div>
  )
}

export default postsView