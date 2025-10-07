// Using with params (URL parameter)

import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { updateBook } from './BooksSlice';
import { useNavigate } from 'react-router-dom';

const UpdateBook = () => {

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const { id } = useParams();

  const updateId = parseInt(id);

  const [updateBookDetails, setUpdateBookDetails] = useState({ id: '', title: '', author: '' });

  const books = useSelector((state) => state.booksReducer.books);

  const book = books.find(book => book.id === updateId);

  useEffect(() => {
    setUpdateBookDetails({ id: updateId, title: book.title, author: book.author });
  }, [updateId, book])

  const handleUpdate = (e) => {
    e.preventDefault();
    dispatch(updateBook(updateBookDetails));
    navigate('/show-books');
  }

  return (
    <div>
      <h2>Edit Book</h2>

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