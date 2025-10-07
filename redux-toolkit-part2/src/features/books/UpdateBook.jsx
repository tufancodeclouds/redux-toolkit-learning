// Using with React Router Location State

import React, {useEffect, useState} from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { updateBook } from './BooksSlice';

const UpdateBook = () => {

  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [updateBookDetails, setUpdateBookDetails] = useState({ id: '', title: '', author: '' });

  useEffect(()=>{
    location.state && setUpdateBookDetails({ id: location.state.id, title: location.state.title, author: location.state.author })
  }, [location.state]);

  const handleUpdate = (e) => {
    e.preventDefault();
    dispatch(updateBook(updateBookDetails));
    navigate('/show-books');
  }

  return (
    <div>
      <h2>Update Book</h2>

      <form onSubmit={handleUpdate}>
        <div className="form-field">
          <label htmlFor="title">Book Name</label>
          <input type="text" placeholder="Book Name" id="title" onChange={(e) => setUpdateBookDetails({ ...updateBookDetails, title: e.target.value })} value={updateBookDetails.title} required />
        </div>
        <div className="form-field">
          <label htmlFor="author">Book Author</label>
          <input type="text" placeholder="Book Author" id="author" onChange={(e) => setUpdateBookDetails({ ...updateBookDetails, author: e.target.value })} value={updateBookDetails.author} required />
        </div>
        <button type="submit">Update Book</button>
      </form>
    </div>
  )
}

export default UpdateBook