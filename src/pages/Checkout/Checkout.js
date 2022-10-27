import React from 'react';
import './Checkout.css';
import { useContext } from 'react'
import { Link, useLoaderData } from 'react-router-dom'
import { AuthContext } from '../../contexts/AuthProvider';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft} from '@fortawesome/free-solid-svg-icons'

const Checkout = () => {
    const {name, duration} = useLoaderData()
    const {user} = useContext(AuthContext);
  return (
    <div className='container checkout'>
        <Link to="/courses"><div><FontAwesomeIcon icon={faArrowLeft} /> Go Back to Courses</div></Link>
        <h1>Checkout</h1>
        <h2>Course Details</h2>
        <h3>Course Name: {name}</h3>
        <p>Course Duration: {duration}</p>
        <h2>Buyer Information</h2>
        <p>
            <b>Buyer Name :</b> {user.displayName? user.displayName : 'No Name Found! Please update Your Profile.'}
        </p>
        <p>
            <b>Buyer Email :</b> {user.email? user.email : 'No Email Found! Pleade update your Profile'}
        </p>
    </div>
  )
}

export default Checkout