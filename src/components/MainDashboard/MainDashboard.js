import React from 'react';
import {Link} from 'react-router-dom';
import CharityContainer from '../CharityContainer/CharityContainer.js';
import './MainDashboard.css';


const MainDashboard = ({charities}) => {
  return (
    <>
      <header className='dashboard-header'>
        <div className='back-btn-container'>
          <Link to='/'>
            <button className='to-landing-page-btn'>Back to Charity Search</button>
          </Link>
        </div>
        <div className='page-btns-container'>
          <Link to='/about'>
            <button className='to-about-btn'>About</button>
          </Link>
        </div>
      </header>
      <section className='main-dashboard'>
        < CharityContainer charities={charities} />
      </section>
    </>
  )
}

export default MainDashboard;
