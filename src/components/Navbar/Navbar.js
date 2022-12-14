import React, { useState } from 'react'
import './Navbar.css'
import logo from '../../assets/icons/logo.png';
import defaultImg from '../../assets/icons/default.png';
import { Link, useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faSignIn, faXmark, faCaretDown } from '@fortawesome/free-solid-svg-icons'
import { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthProvider';
import Toggle from '../toggle-theme/Toggle';

const Navbar = () => {
    const [open, setOpen] = useState(false)
    const { user, logOut } = useContext(AuthContext);
    const navigate = useNavigate()
    const handleLogOut = () => {
        logOut()
            .then(() => navigate('/login'))
            .catch(err => console.error(err))
    }
    return (
        <nav>
            <div className='nav-container'>

                <div className='toggle-icon' onClick={() => setOpen(!open)}>
                    {open ? <FontAwesomeIcon icon={faXmark} /> : <FontAwesomeIcon icon={faBars} />}
                </div>

                <div className='nav-logo'>
                    <Link to='/'>
                        <img src={logo} alt="ada academy logo"></img>
                    </Link>
                </div>

                <div className={`nav-items ${open ? 'shown' : 'hide'}`}>
                    <Link to='/'>Home</Link>
                    <Link to='/courses'>Courses</Link>
                    <Link to='/faq'>FAQ</Link>
                    <Link to='/blogs'>Blogs</Link>

                </div>
                <div className='nav-items2'>
                    {
                        user ?
                            <div className='user-profile'>
                                {user?.displayName}
                                {
                                    user.photoURL? <img src={user.photoURL} alt={user.displayName} title={user?.displayName} />
                                    : <img src = {defaultImg} alt={user.displayName} />
                                    
                                }
                                <div className="dropdown">
                                    <FontAwesomeIcon icon={faCaretDown} />
                                    <div className="dropdown-content">

                                        <button onClick={handleLogOut}>Logout</button>
                                    </div>
                                </div>
                            </div>
                            :
                            <>
                                <Link to='/login'>Login</Link>
                                <Link to='/sign-up'>Sign Up</Link>
                            </>
                    }
                </div>
                
                <Toggle/>
                <div className='toggle-icon'>
                    {
                        user ?
                            <div className='user-profile'>
                                {
                                user.photoURL? <img src={user.photoURL} alt={user.displayName} />
                                : <img src = {defaultImg} alt={user.displayName} />
                                }
                            </div>
                            : <Link to='/login'><FontAwesomeIcon icon={faSignIn} /></Link>
                    }
                    
                </div>
            </div>
        </nav>
    )
}

export default Navbar