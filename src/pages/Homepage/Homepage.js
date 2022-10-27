import React, { useContext } from 'react'
import './Homepage.css'
import headerImg from '../../assets/images/header-image.png';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';

import CourseCard from '../../components/CourseCard/CourseCard';
import '../Courses/Courses.css';


const Homepage = () => {
  const {user} = useContext(AuthContext)
  const courses = useLoaderData()
  return (
    <div className='home-container'>
      {/* Header section */}
      <header>
        <div className='header-text'>
            <h3>Welcome to</h3>
            <h2>Ada Academy</h2>
            <p>Learn to code from the professionals</p>
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
      <div className='container'>
            <h1 className='title-h1'>Courses We are Offering</h1>
            <div className='courses-container'>
                {courses.map(course => <CourseCard key={course.id} course={course} />)}
            </div>
        </div>
      </section>
    </div>
  )
}

export default Homepage