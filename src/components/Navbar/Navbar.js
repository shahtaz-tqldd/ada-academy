import React from 'react'
import './Navbar.css'
import logo from '../../assets/icons/logo.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
        <div className='logo'>
            <img src={logo} alt="ada academy" />
        </div>
        <div className='nav-items'>
            <Link to='/' >Home</Link>
            <Link to='/blogs' >Blogs</Link>
        </div>
    </nav>
  )
}

export default Navbar