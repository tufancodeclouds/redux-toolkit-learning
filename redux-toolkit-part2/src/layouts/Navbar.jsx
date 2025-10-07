import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav>
        <NavLink to='/' className='nav-link'>Home</NavLink>
        <NavLink to='/show-books' className='nav-link'>Show Books</NavLink>
        <NavLink to='/add-book' className='nav-link'>Add Book</NavLink>
    </nav>
  )
}

export default Navbar