import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addBook } from './BooksSlice'
import { useNavigate } from 'react-router-dom'

const AddBook = () => {

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const [bookDetails, setBookDetails] = useState({ id: '', title: '', author: '' });

  const numberOfBooks = useSelector((state) => state.booksReducer.books.length);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addBook({ ...bookDetails, id: numberOfBooks + 1 }));
    setBookDetails({ id: '', title: '', author: '' });
    navigate('/show-books')
  }

  return (
    <div>
      <h2>Add Book</h2>

      <form onSubmit={handleSubmit}>
        <div className="form-field">
          <label htmlFor="title">Book Name</label>
          <input type="text" placeholder="Book Name" id="title" onChange={(e) => setBookDetails({ ...bookDetails, title: e.target.value })} value={bookDetails.title} required />
        </div>
        <div className="form-field">
          <label htmlFor="author">Book Author</label>
          <input type="text" placeholder="Book Author" id="author" onChange={(e) => setBookDetails({ ...bookDetails, author: e.target.value })} value={bookDetails.author} required />
        </div>
        <button type="submit">Add Book</button>
      </form>
    </div>
  )
}

export default AddBook