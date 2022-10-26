import React, { useContext } from 'react'
import './Homepage.css'
import headerImg from '../../assets/images/header-image.png';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';

const Homepage = () => {
  const {user} = useContext(AuthContext)
  return (
    <div className='home-container'>
      {/* Header section */}
      <header>
        <div className='header-text'>
            <h2>Welcome to Ada Academy</h2>
            <p>Learn to code from professional</p>
            {
              user?.uid? ''
              : <Link to='/login'><button>Get Started</button></Link>
            }
            
        </div>
        <div className='header-img'>
            <img src={headerImg} alt="learn to code" />
        </div>
      </header>
      
      
      <section>

      </section>
    </div>
  )
}

export default Homepage