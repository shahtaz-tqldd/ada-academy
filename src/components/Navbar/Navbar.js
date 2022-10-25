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
            <Link to='/courses' >Courses</Link>
            <Link to='/faq' >FAQ</Link>
            <Link to='/blogs' >Blogs</Link>
        </div>
        <div className='nav-items btn-link'>
            <span><Link to='/login' >Login</Link></span>
            <span><Link to='/sign-up' >Sign Up</Link></span>
            
        </div>
    </nav>
  )
}

export default Navbar