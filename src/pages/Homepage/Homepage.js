import React from 'react'
import './Homepage.css'
import headerImg from '../../assets/images/header-image.png';

const Homepage = () => {
  return (
    <div className='home-container'>
      {/* Header section */}
      <header>
        <div className='header-text'>
            <h2>Welcome to Ada Academy</h2>
            <p>Learn to code from professional</p>
            <button>Get Started</button>
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