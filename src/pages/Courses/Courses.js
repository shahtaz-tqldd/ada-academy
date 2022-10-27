import React from 'react'
import { useLoaderData } from 'react-router-dom'
import CourseCard from '../../components/CourseCard/CourseCard';
import './Courses.css';

const Courses = () => {
    const courses = useLoaderData()

    return (
        <div className='container'>
            <h1 className='title-h1'>Courses you may Like</h1>
            <div className='courses-container'>
                {courses.map(course => <CourseCard key={course.id} course={course} />)}
            </div>
        </div>

    )
}

export default Courses