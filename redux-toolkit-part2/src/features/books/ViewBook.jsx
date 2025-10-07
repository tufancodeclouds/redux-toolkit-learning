import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { deleteBook } from './BooksSlice'
import { Link, useNavigate } from 'react-router-dom'

const ViewBook = () => {

  const books = useSelector((state) => state.booksReducer.books);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleDelete = (bookId) => {
    dispatch(deleteBook(bookId))
  }

  // const handleEdit = (bookId) => {
  //   navigate(`/update-book/${bookId}`)
  // }

  return (
    <div>
      <h2>List of Books</h2>

      {books && books.length > 0 ?(
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Book Name</th>
              <th>Book Author</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {books.map((book, index) => {
              const { id, title, author } = book
              return (
                <tr key={id}>
                  <td>{index + 1}</td>
                  <td>{title}</td>
                  <td>{author}</td>
                  <td>
                    {/* <button onClick={() => handleEdit(id)}>Edit</button> */}
                    <Link to='/update-book' state={{id, title, author}}><button>Edit</button></Link>
                    <button onClick={() => handleDelete(id)}>Delete</button>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      ) : (<p className='not-found'>No books found</p>)}
    </div>
  )
}

export default ViewBook