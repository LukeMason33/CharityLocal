import React from 'react';
import {Link} from 'react-router-dom';
import './NotFoundPage.css';

const NotFoundPage = () => {
  return (
    <div className='not-found-container'>
      <h1 className='header'>Sorry! This page does not exist!</h1>
      <p className='description'>The page that you are trying to visit does not exist for this site! Click the button below to go to the landing page.</p>
      <p className='description'>DONATE LOCALLY!</p>
      <Link to='/'>
        <button className='landing-page-btn'>Go To Landing Page</button>
      </Link>
    </div>
  )
}


export default NotFoundPage;
