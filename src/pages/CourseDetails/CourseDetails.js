import React from 'react'
import { Link, useLoaderData } from 'react-router-dom'
import './CourseDetails.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faStar, faClock } from '@fortawesome/free-solid-svg-icons'

const CourseDetails = () => {
    const course = useLoaderData()
    const { id, courseImg, name, description, duration, instructor, outline, ratings } = course
    console.log(course)
    return (
        <div className='container course-details'>
            <Link to="/courses"><div><FontAwesomeIcon icon={faArrowLeft} /> Go Back</div></Link>
            <img src={courseImg} alt={name}></img>
            <h1 className='title'>{name}</h1>
            <p className='time'><FontAwesomeIcon icon={faClock}/> Duration: {duration} <span><FontAwesomeIcon icon={faStar} /> {ratings} </span></p>
            
            <h2>Course Description</h2>
            <p className='description'>{description}</p>
            <h2>What You Will Learn</h2>
            <p>{outline.map((e, index) => <li key={index}>{e}</li>)}</p>
            <div>
                <h2>Instractor</h2>
                <div>
                    <img src={instructor.authorImg} alt={instructor.name} />
                    <div>
                        <p>{instructor.name}</p>
                        <span><FontAwesomeIcon icon={faStar} /> {instructor.rating}</span>
                    </div>
                </div>
            </div>
            <Link to={`/courses/${id}/premium-access`}><button>Get Premium Access</button></Link>

        </div>
    )
}

export default CourseDetails