import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import CharityContainer from '../CharityContainer/CharityContainer.js';


const MainDashboard = ({charities}) => {
  return (
    <>
      <header className='dashboard-header'>
        <Link to='/'>
          <button className='to-landing-page-btn'>Back to Charity Search</button>
        </Link>
        <Link to='/about'>
          <button className='to-about-btn'>About</button>
        </Link>
        <Link to='/mission'>
          <button className='to-mission-btn'>Mission</button>
        </Link>
      </header>
      <section className='main-dashboard'>
        < CharityContainer charities={charities} />
      </section>
    </>
  )
}

export default MainDashboard;
