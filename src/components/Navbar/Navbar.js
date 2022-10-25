import React, { useState } from 'react'
import './Navbar.css'
import logo from '../../assets/icons/logo.png';
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faSignIn, faXmark } from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {
    const [open, setOpen] = useState(false)
    return (
        <nav>
            <div className='nav-container'>

                <div className='toggle-icon' onClick={() => setOpen(!open)}>
                    {open ? <FontAwesomeIcon icon={faXmark} /> : <FontAwesomeIcon icon={faBars} />}
                </div>

                <div className='nav-logo'>
                    <Link to='/'>
                        <img src={logo} alt="quiz bee"></img>
                    </Link>
                </div>

                <div className={`nav-items ${open ? 'shown' : 'hide'}`}>
                    <Link to='/'>Home</Link>
                    <Link to='/courses'>Courses</Link>
                    <Link to='/faq'>FAQ</Link>
                    <Link to='/blogs'>Blogs</Link>
                </div>
                <div className='nav-items2'>
                    <Link to='/login'>Login</Link>
                    <Link to='/sign-up'>Sign Up</Link>
                </div>

                <div className='toggle-icon'>
                    <Link to='/login'><FontAwesomeIcon icon={faSignIn} /></Link>
                </div>
            </div>
        </nav>
    )
}

export default Navbar