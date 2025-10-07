import { createSlice } from "@reduxjs/toolkit";

const initialBooks = {
    books: [
        { id: 1, title: 'Love India', author: 'Tufan Ghosh' },
        { id: 2, title: 'Love Nepal', author: 'Tufan Ghosh' }
    ]
}

const bookSlice = createSlice({
    name: 'books',
    initialState: initialBooks,
    reducers: {
        showBooks: (state) => {
            return state;
        },
        addBook: (state, action) => {
            state.books.push(action.payload);
        },
        updateBook: (state, action) => {
            state.books = state.books.map(book => book.id === action.payload.id ? action.payload : book);
        },
        deleteBook: (state, action) => {
            state.books = state.books.filter(book => book.id !== action.payload);
        }
    }
})

export const { showBooks, addBook, updateBook, deleteBook } = bookSlice.actions;
export default bookSlice.reducer;
