import React from 'react'
import './CourseCard.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

const CourseCard = ({ course }) => {
    const { name, id, instractor, numberStudent, ratings, courseImg } = course
    console.log(course)
    return (
        <div className='course-card'>
            <Link to={`/courses/${id}`}>
            <img src={courseImg} alt={name} />
            <div>
                <h2>{name}</h2>
                <div>
                    <p>Enrolled Student: {numberStudent}</p>
                    <p><FontAwesomeIcon icon={faStar} /> {ratings} </p>
                </div>
            </div>
            </Link>
        </div>
    )
}

export default CourseCard