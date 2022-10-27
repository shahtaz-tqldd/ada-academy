import React from 'react'
import { Link, useLoaderData } from 'react-router-dom'
import CourseCard from '../../components/CourseCard/CourseCard';
import './Courses.css';

const Courses = () => {
    const courses = useLoaderData()

    return (
        <div className='container'>
            <h1 className='title-h1'>Courses you may Like</h1>
            <div className='course-page-container'>
                <div className='courses-container'>
                    {courses.map(course => <CourseCard key={course.id} course={course} />)}
                </div>
                <div className='sidebar-container'>
                    <h3>Our Top Courses</h3>
                    {courses.map(course => <Link to={`/courses/${course.id}`}><div key={course.id} className='side-bar'>{course.name}</div></Link>)}
                </div>
            </div>
        </div>

    )
}

export default Courses