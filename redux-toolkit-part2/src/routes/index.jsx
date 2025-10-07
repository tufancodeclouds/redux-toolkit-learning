import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import Error from '../pages/Error'
import Navbar from '../layouts/Navbar'
import ViewBook from '../features/books/ViewBook'
import AddBook from '../features/books/AddBook'
import UpdateBook from '../features/books/UpdateBook'
import Footer from '../layouts/Footer'

const Index = () => {
    return (
        <BrowserRouter>
            <Navbar />
            <main>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/show-books" element={<ViewBook />} />
                    <Route path="/add-book" element={<AddBook />} />
                    {/* <Route path="/update-book/:id" element={<UpdateBook />} /> */}
                    <Route path="/update-book" element={<UpdateBook />} />
                    <Route path="*" element={<Error />} />
                </Routes>
            </main>
            <Footer />
        </BrowserRouter>
    )
}

export default Index