import React from 'react';
import './Errorpage.css';
import { Link } from 'react-router-dom';
import errorIcon from '../../assets/images/error-icon.png';

const Errorpage = () => {
  return (
    <div className='errorpage-container'>
        <img src={errorIcon} alt="this page is not found!"/>
        <h1>Page Not Found</h1> 
        <p>Sorry! We could't find the page that you have requested. Maybe the page is broken or the link you are looking for is incorrect. Please try a valid page link!</p>
        <p>Go Back to <Link to='/'>Homepage</Link></p>
    </div>
  )
}

export default Errorpage