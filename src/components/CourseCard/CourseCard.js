import React from 'react'
import './CourseCard.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

const CourseCard = ({ course }) => {
    const { name, id, numberStudent, ratings, courseImg } = course
    console.log(course)
    return (
        <div className='course-card'>
            <Link to={`/courses/${id}`}>
            <img src={courseImg} alt={name} />
            <div>
                <h3>{name}</h3>
                <div>
                    <p><small>Enrolled Student: {numberStudent}</small></p>
                    <p><FontAwesomeIcon icon={faStar} /> {ratings} </p>
                </div>
            </div>
            </Link>
        </div>
    )
}

export default CourseCard